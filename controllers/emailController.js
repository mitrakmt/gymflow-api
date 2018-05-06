let emailController = {}
let Mailchimp = require('mailchimp-api-v3')
let mailchimp = new Mailchimp(process.env.MAILCHIMP_API);
var mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API, domain: process.env.MAILGUN_DOMAIN });

emailController.CONTACT_US = (req, res) => {
  let message = req.body.message
  let topic = req.body.topic
  let email = req.body.email
  let name = req.body.name
  let company = req.body.company || 'No company provided'

  let emailData = {
    from: email,
    to: 'contact@civilityinternational.org',
    subject: "[URGENT] - Topic: " + topic,
    text: "Name: " + name + ", Company: " + company + ", Topic: " + topic + "\n \n" + message
  }

  mailgun.messages().send(emailData, (err, body) => {
    if (err) {
      res.status(400).send(err)
    } else {
      res.status(200).send(body)
    }
  })
}

emailController.SIGN_UP = (req, res) => {
  let email = req.body.email
  let first_name = req.body.firstName
  let last_name = req.body.lastName

  mailchimp.post('/lists/7fe6db1a0d/members', {
    email_address: email,
    first_name,
    last_name,
    status: 'subscribed'
  })
    .then(results => {
      res.status(200).send(results)
    })
}

module.exports = emailController
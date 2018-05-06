const config = require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const rootRouter = require('./routers/index')
const expressJWT = require('express-jwt')
const helmet = require('helmet')
const db = require('./db')
// const jwt = require('jsonwebtoken')
const PORT = process.env.PORT || 3001
const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods: GET, POST, PUT");
  next();
});

// app.use(expressJWT ({ secret: 'this is the secret token!' }).unless({ path: ['/api/auth/signin', '/api/auth/signup'] }))
app.use('/api', rootRouter)

app.listen(PORT, () => console.log('Making some magic on port', PORT))

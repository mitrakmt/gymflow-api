let Sequelize = require('sequelize')

module.exports = (db) => {    
    const Users = db.define('users', {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        username: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING
        },
        email_verified: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        role: {
            type: Sequelize.STRING
        },
        interests: {
            type: Sequelize.JSON
        },
        username: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true
    })

    return Users
}


// export default (sequelize, DataTypes) => {
//     const Users = sequelize.define('Users', {
//       username: {
//         allowNull: false,
//         type: DataTypes.STRING,
//         unique: true,
//         validate: {
//           notEmpty: true
//         }
//       },
//       phone: {
//         allowNull: false,
//         type: DataTypes.STRING,
//         validate: {
//           not: ['[a-z]', 'i']
//         }
//       },
//       email: {
//         allowNull: false,
//         type: DataTypes.STRING,
//         unique: true,
//         validate: {
//           isEmail: true
//         }
//       },
//       password: {
//         allowNull: false,
//         type: DataTypes.STRING,
//         validate: {
//           notEmpty: true
//         }
//       }
//     });
//     Users.associate = (models) => {
//       Users.belongsToMany(models.Groups, {
//         through: 'GroupUsers',
//         as: 'groups',
//         foreignKey: 'userId'
//       });
//     };
//     return Users;
//   };
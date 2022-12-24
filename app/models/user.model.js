const Credentials = require('./credentials.model')
const Location = require('./location.model')

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user", {
      user_id: {
        type: Sequelize.BIGINT,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.BOOLEAN
      },
      gender: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      phone: {
        type: Sequelize.STRING(13),
        allowNull: true,
        defaultValue: null,
      },
      nationality: {
        type: Sequelize.STRING
      },
      pic_large: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      pic_medium: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      pic_thumbnail: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      location_id: {
        type: Sequelize.BIGINT,
        foreignKey: true,
        references: {
          model: "location",
          key: "id"
        }
      },
      cred_id: {
        type: Sequelize.UUID,
        foreignKey: true,
        references: {
          model: "credentials",
          key: "id"
        }
      }
    });

  return User;
};
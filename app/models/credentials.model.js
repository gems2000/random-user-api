module.exports = (sequelize, Sequelize) => {
  const Credentials = sequelize.define(
    "credentials", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      md5: {
        type: Sequelize.STRING
      },
      base64: {
        type: Sequelize.STRING
      },
      sha1: {
        type: Sequelize.STRING
      },
      sha256: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('NOW')
      }
    });

  Credentials.associate = function (models) {
    // associations can be defined here
  };

  return Credentials;
};
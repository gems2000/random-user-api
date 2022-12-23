module.exports = (sequelize, Sequelize) => {
  const Credentials = sequelize.define(
    "credentials", {
      uuid: {
        type: Sequelize.STRING
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
      }
    });

  Credentials.associate = function (models) {
    // associations can be defined here
  };

  return Credentials;
};
module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user", {
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
      mobile: {
        type: Sequelize.STRING
      }
    });

  User.associate = function (models) {
    // associations can be defined here
  };

  return User;
};
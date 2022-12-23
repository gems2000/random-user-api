module.exports = (sequelize, Sequelize) => {
  const Location = sequelize.define(
    "location", {
      street_number: {
        type: Sequelize.INTEGER
      },
      street_name: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      postcode: {
        type: Sequelize.BIGINT
      }
    });

  Location.associate = function (models) {
    // associations can be defined here
  };

  return Location;
};
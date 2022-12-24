'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'location', {
        id: {
          type: Sequelize.BIGINT,
          unique: true,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        street_number: {
          type: Sequelize.INTEGER
        },
        street_name: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        },
        city: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        },
        state: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        },
        country: {
          type: Sequelize.STRING,
          allowNull: true,
          defaultValue: null,
        },
        postcode: {
          type: Sequelize.STRING(7),
          allowNull: true,
          defaultValue: null,
        }
      }
    )
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('location');
  }
};
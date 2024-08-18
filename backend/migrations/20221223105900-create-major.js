'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Majors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      about: {
        type: Sequelize.TEXT
      },
      history: {
        type: Sequelize.TEXT
      },
      major: {
        type: Sequelize.TEXT
      },
      comajor: {
        type: Sequelize.TEXT
      },
      culture: {
        type: Sequelize.TEXT
      },
      location: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Majors');
  }
};
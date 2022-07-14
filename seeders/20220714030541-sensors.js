'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sensors', [
      {
        name: 'Home 1 Sensor 1',
        homeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Home 1 Sensor 2',
        homeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Home 2 Sensor 1',
        homeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Home 2 Sensor 2',
        homeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sensors', null, {});
  }
};

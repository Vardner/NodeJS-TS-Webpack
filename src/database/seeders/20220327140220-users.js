'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        password: await bcrypt.hash('HugeSecret123', 10),
        email: 'JohnDoe@gmail.com',
        gender: 'male',
      },
      {
        firstName: 'Sam',
        lastName: 'Smith',
        password: await bcrypt.hash('HugeSecret123', 10),
        email: 'SamSmith@gmail.com',
        gender: 'male',
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        password: await bcrypt.hash('HugeSecret123', 10),
        email: 'JaneDoe@gmail.com',
        gender: 'female',
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};

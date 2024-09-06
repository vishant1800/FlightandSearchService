'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Pune International Airport',
        cityId: 1,  //because pune id is 1
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Shirdi International Airport',
        cityId: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mangaluru International Airport',
        cityId: 2,  
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kempegowda International Airport',
        cityId: 2,  
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chennai International Airport',
        cityId: 7,  
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('restos', [
      {
        id: uuidv4(),
        restoName: 'RM Padang Sederhana 1',
        restoAddress: 'Jl. Raya Kebayoran Lama No. 12, Jakarta Selatan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        restoName: 'RM Padang Sederhana 2',
        restoAddress: 'Jl. Raya Kebayoran Lama No. 13, Jakarta Selatan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        restoName: 'RM Padang Sederhana 3',
        restoAddress: 'Jl. Raya Kebayoran Lama No. 14, Jakarta Selatan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        restoName: 'RM Padang Sederhana 4',
        restoAddress: 'Jl. Raya Kebayoran Lama No. 15, Jakarta Selatan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),
        restoName: 'RM Padang Sederhana 5',
        restoAddress: 'Jl. Raya Kebayoran Lama No. 16, Jakarta Selatan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('restos', null, {});

  }
};

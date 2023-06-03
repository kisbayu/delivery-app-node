'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('restos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      restoName: {
        type: Sequelize.STRING
      },
      restoAddress: {
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
    await queryInterface.dropTable('restos');
  }
};
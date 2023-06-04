'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      userID: {
        type: Sequelize.UUID
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      restoID: {
        type: Sequelize.UUID
      },
      restoName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      distance: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      paymentMethod: {
        type: Sequelize.ENUM('Cash', 'GoPay', 'OVO'),
        allowNull: false,
      },
      deliveryType: {
        type: Sequelize.ENUM('Regular', 'Express'),
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      note: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.ENUM('On Going', 'Done', 'Canceled'),
        allowNull: false,
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
    await queryInterface.dropTable('orders');
  }
};
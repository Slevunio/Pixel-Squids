'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'Tracks',
      [
        {
          name: "Track1",
          blob: "blob",
          notes: "trututu",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Track2",
          blob: "blob",
          notes: "trututu",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Track3",
          blob: "blob",
          notes: "trututu",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

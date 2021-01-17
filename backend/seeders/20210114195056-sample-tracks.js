'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      'Tracks',
      [
        {
          name: "Track1",
          soundTrack: "blob",
          notes: "trututu",
          instrumentType: "ACOUSTIC",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Track2",
          soundTrack: "blob",
          notes: "trututu",
          instrumentType: "BASS",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Track3",
          soundTrack: "blob",
          notes: "trututu",
          instrumentType: "ELECTRIC",
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

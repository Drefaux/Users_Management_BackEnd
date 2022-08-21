module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define(
      "user",
      {
        full_name: {
          type: Sequelize.STRING,
        },
        gender: {
          type: Sequelize.STRING,
        },
        status: {
          type: Sequelize.STRING,
        },
        avatar: {
          type: Sequelize.STRING,
        },
        created_at: {
          type: Sequelize.DATE,
        },
        updated_at: {
          type: Sequelize.DATE,
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
      },
      {
        // If don't want createdAt
        createdAt: false,
        // If don't want updatedAt
        updatedAt: false,
      }
    );
    return User;
  };
  
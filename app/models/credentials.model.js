module.exports = (sequelize, Sequelize) => {
  const Credentials = sequelize.define(
    "credentials", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      md5: {
        type: Sequelize.STRING
      },
      base64: {
        type: Sequelize.STRING
      },
      sha1: {
        type: Sequelize.STRING
      },
      sha256: {
        type: Sequelize.STRING
      },
      createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        field: 'updated_at',
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });

  return Credentials;
};
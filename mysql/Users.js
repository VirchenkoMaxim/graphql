const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        ip_address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
        {
            freezeTableName: true,
        }
    )
}

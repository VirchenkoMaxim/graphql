const Sequelize = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('stats', {
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        date: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        page_views: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        clicks: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    },
        {
            freezeTableName: true,
        }
    )
}

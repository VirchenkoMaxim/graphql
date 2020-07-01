const Sequelize = require('sequelize');

const sequelize = new Sequelize('articles', 'root', 'maks', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false
    },
})

const Stats = require('./Stats')(sequelize);
const Users = require('./Users')(sequelize);

Users.hasMany(Stats);
Stats.belongsTo(Users);

module.exports = {
    sequelize: sequelize,
    stats: Stats,
    users: Users
}



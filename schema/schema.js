const graphql = require('graphql');
const db = require('../mysql/db')
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLList, GraphQLInt } = graphql;
const { Op } = require("sequelize");




const StatsType = new GraphQLObjectType({
    name: 'stats',
    fields: () => ({
        userId: {
            type: GraphQLID,
            resolve(stats) {
                return stats.userId;
            }
        },
        date: {
            type: GraphQLString,
            resolve(stats) {
                return stats.date;
            }
        },
        page_views: {
            type: GraphQLInt,
            resolve(stats) {
                return stats.page_views;
            }
        },
        clicks: {
            type: GraphQLInt,

            resolve(stats) {
                return stats.clicks;
            }
        },
    }),
})

const UsersType = new GraphQLObjectType({
    name: 'users',
    fields: () => ({
        id: {
            type: GraphQLID,
            resolve(users) {
                return users.id;
            }
        },
        first_name: {
            type: GraphQLString,
            resolve(users) {
                return users.first_name;
            }
        },
        last_name: {
            type: GraphQLString,
            resolve(users) {
                return users.last_name;
            }
        },
        gender: {
            type: GraphQLString,
            resolve(users) {
                return users.gender;
            }
        },
        ip_address: {
            type: GraphQLString,
            resolve(users) {
                return users.ip_address;
            }
        },
        email: {
            type: GraphQLString,
            resolve(users) {
                return users.email;
            }
        },
        stats: {
            type: new GraphQLList(StatsType),
            resolve(users) {
                return users.getStats();
            }
        }
    }),
})

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        users: {
            type: new GraphQLList(UsersType),
            // args: {
            //     from: { type: GraphQLID },
            //     to: { type: GraphQLID },
            // },
            resolve(parent, args) {
                return db.users.findAll({
                    where: args
                    // { id: { [Op.between]: [from, to] } },
                })
            }
        },
        stats: {
            type: new GraphQLList(StatsType),
            // args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return db.stats.findAll({
                    where: args
                })
            }
        },

    }

})

module.exports = new GraphQLSchema({
    query: Query
})


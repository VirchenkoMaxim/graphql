const express = require('express');
const cors = require('cors')
const graphqlHTTP = require('express-graphql');
const app = express();
const schema = require('./schema/schema');


app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    pretty: true,
    graphiql: true,
}))

app.listen(4000, err => {
    err ? console.log(err) : console.log("server started");
})

const express = require("express")
const colors = require('colors')
require('dotenv').config();
const {graphqlHTTP} = require("express-graphql");
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')
const schema = require("./schema/schema")
const app = express();

connectDB();
 
app.use(
    '/graphql',
    graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development',
}))
app.listen(port, console.log(`server running on port ${port}`))

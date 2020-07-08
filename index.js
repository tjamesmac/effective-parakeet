const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const dotenv = require('dotenv');

const schema = require('./lib/back/typeDefinitions');

dotenv.config();

const PORT = process.env.PORT || 3005;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.get('/', (req, res) => res.send('hello world'));

app.listen(PORT, () => console.log(`Example app listening at ${PORT}`));

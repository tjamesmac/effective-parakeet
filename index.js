const express = require('express');
const app = express();
const { graphqlHTTP } = require('express-graphql');
const dotenv = require('dotenv');
const path = require('path');

const schema = require('./lib/back/schema');

dotenv.config();

const PORT = process.env.PORT || 3005;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.use(express.static('./dist'));

app.get('/', (req, res) => {
  console.log(path.resolve(path.join('./dist', 'index.html')));
  res.sendFile(path.resolve(path.join('./dist', 'index.html')));
});

app.listen(PORT, () => console.log(`Example app listening at ${PORT}`));

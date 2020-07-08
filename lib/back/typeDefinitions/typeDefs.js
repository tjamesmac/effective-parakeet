const queries = require('./queries');

const typeDefs = `
${queries}
`;

module.exports = { typeDefs };

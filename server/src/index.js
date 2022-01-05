const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const clubAPI = require("./datasources/club-api");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            clubAPI: new clubAPI(),
        }
    }
})

server.listen().then(() => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
})
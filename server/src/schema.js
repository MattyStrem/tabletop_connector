const { gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        "Query to get the list of clubs"
        listOfClubs: [Club]!
    }

    type Club {
        id: ID!
        "club's name"
        name: String!
        "club's location"
        location: String!
    }
`

module.exports = typeDefs;
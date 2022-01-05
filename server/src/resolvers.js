const resolvers = {
    Query: {
        listOfClubs: ( _ , __ , { dataSources}) => {
            return dataSources.ClubAPI.getListOfClubs();

        }
    }
}

module.exports.resolvers
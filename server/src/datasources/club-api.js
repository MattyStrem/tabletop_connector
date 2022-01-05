const { RESTDataSource } = require("apollo-datasource-rest");

/*const mockClubs = {
    {
        id: 1,
        name: "South London legion",
        location: "croydon"
    },
}
*/

class ClubAPI extends RESTDataSource {
    constructor() {
        super();
    }

    getListOfClubs() {
        return this.get(`clubs`)
    }
}

module.exports = ClubAPI;
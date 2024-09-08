const { Airplane } = require('../models/index')

class AirplaneRepository {
    async getAirplane (data) {
        try {
            const airplane = await Airplane.findByPk(data);
            return airplane;
        } catch (error) {
            console.log("Something went wrong in the airplane repository");
            throw { error }
        }
    }
}

module.exports = AirplaneRepository;
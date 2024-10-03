const { Op } = require('sequelize');
const { Flights } = require('../models/index')

class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        // if (data.minPrice && data.maxPrice) {  //this approach is created nested condition
        //     Object.assign(filter, {            // using this approach assign will be called multiple times
        //         [Op.and]: [
        //             { price: { [Op.gte]: data.minPrice } },
        //             { price: { [Op.lte]: data.maxPrice } }
        //         ]
        //     })
        // }
        let priceFilter = [];
        if (data.minPrice) {
            //Object.assign(filter, { price: { [Op.gte]: data.minPrice } })
            priceFilter.push({ price: { [Op.gte]: data.minPrice } });
        }
        if (data.maxPrice) {
            //Object.assign(filter, { price: { [Op.lte]: data.maxPrice } }) // here assign will be called again
            priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
        }

        Object.assign(filter, { [Op.and]: priceFilter });  //this will handle both max and min

        return filter;
    }

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight repository");
            throw { error }
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight repository");
            throw { error }
        }
    }

    async getAllFlight(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the flight repository");
            throw { error }
        }
    }

    async updateFlight(flightId, data) {
        try {
            await Flights.update(data,{
                where: {
                    Id: flightId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the flight repository");
            throw { error }
        }
    }
}

module.exports = FlightRepository;
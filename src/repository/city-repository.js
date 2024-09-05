//const { where } = require("sequelize");
const { City } = require("../models/index")

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ name });  //create and destroy are sequelize functions
            // At line 7, ({name}) this means ({name: name})
            // First `name`, is the one that is mentioned in models //Second one is that which you have passes in function i.e. name provided while calling function
            return city;
        }
        catch (error) {
            console.log("Something went wrong in the repository layer")
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
        } catch (error) {
            console.log("Something went wrong in the repository layer")
            throw { error };
        }
    }

    async updateCity(cityId, data) {  //data is the object ex: { name : 'mumbai'}
        try {
            // The below approach will work but will not return the updated object whereas it returns an array with one elements
            // which tells about the number of affected rows
            // If we are using PgSQL then returning: true and plain: true will work
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // })
            
            // for getting updated data object in MySql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer")
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer")
            throw { error };
        }
    }
}



module.exports = CityRepository;

const {Op}=require('sequelize')
const {City} =require('../models/index')
class CityRepository{
    async createCity({name}){
        try{
            const city=await City.create({name})
            return city;
        }
        catch(error){
           throw error;
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({where:{
                id:cityId
            }})
            return true;
        }
        catch(error){
            throw error;
        }
    }

    async updateCity(cityId,data){
        try{
           const city=await City.findByPk(cityId)
           city.name=data.name;
           await city.save();
           return city;
        }
        catch(err){
            console.log("Something went wrong in the repo layer")
            throw err.message;
        }
    }

    async getCity(cityId){
        try{
           const city=await City.findByPk(cityId)
           return city;
        }
        catch(err){
            console.log("Something went wrong in the repo layer")
            throw err;
        }
    }

    async getAllCities(filter){
        try{
            if(filter.name){
                const cities=await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                })
                console.log(cities)
                return cities;
            }
           const cities=await City.findAll()
           return cities;
        }
        catch(err){
            console.log("Something went wrong in the repo layer")
            throw err.message;
        }
    }
}

module.exports=CityRepository
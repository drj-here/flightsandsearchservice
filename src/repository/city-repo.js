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
           const city=await City.update(data,{
            where:{
                id:cityId
            }
           })
           return city;
        }
        catch(err){
            console.log("Something went wrong in the repo layer")
            throw err;
        }
    }

    async getCity(cityId){
        try{
           const city=await City.findById(cityId)
           return city;
        }
        catch(err){
            console.log("Something went wrong in the repo layer")
            throw err;
        }
    }

    async getAllCities(){
        try{
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
const CityRepository=require('../repository/index')

class CityService{
    constructor(){
        this.CityRepository=new CityRepository();
    }

    async createCity(data){
        try{
           const city=await this.CityRepository.createCity(data)
           return city;
        }
        catch(error){
            console.log("Something went wrong in the city service")
            throw error;
        }
    }

    async deleteCity(cityId){
        try{
            const city=await this.CityRepository.deleteCity(cityId)
            return city;
        }
        catch(error){
            console.log("Something went wrong in the city service")
            throw error;
        }
    }

    async updateCity(cityId,data){
        try{
            const city=await this.CityRepository.updateCity(cityId,data)
        }
        catch(error){
            console.log("Something went wrong in the city service")
            throw error;
        }
    }

    async getCity(cityId){
        try{
            const city=await this.CityRepository.getCity(cityId);
            return city;
        }
        catch(error){
            console.log("Something went wrong in the city service")
            throw error;
        }
    }
}

module.exports={CityService}
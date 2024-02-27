const {Flights}=require('../models/index')

class FlightRepository{

    async createFlight(data){
        try{
           const flight=await Flights.create(data);
           return flight;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            console.log(error.message)
            throw error;
        }
    }

    async deleteFlight(flightId){
        try{
           await Flights.destroy({where:{id:flightId}});
           return true;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
        }
    }
}

module.exports=FlightRepository
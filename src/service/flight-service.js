const city = require('../models/city');
const {FlightRepository,AirplaneRepository}=require('../repository/index')
const {compareTime}=require('../utils/helper')
class FlightService{
    constructor(){
        this.airplaneRepository=new AirplaneRepository();
        this.flightRepository=new FlightRepository()
    }

    async createFlight(data){
        try{
            if(!compareTime(data.arrivalTime,data.departureTime)) {
                throw {error:'Arrival time should be greater than departure time'}
            }
            const airplane=await this.airplaneRepository.getAirplane(data.airplaneId)
            data={...data,totalSeats:airplane.capacity}
            const flight=await this.flightRepository.createFlight(data)
            return flight;
        }
        catch(error){
            console.log("Something went wrong in the service layer")
            throw error;
        }
    }

    async getAllFlight(data){
        try{
           const flights=await this.flightRepository.getAllFlight(data)
           return flights;
        }
        catch(error){
            console.log("Something went wrong in service")
            throw error;
        }
    }
    async deleteFlight(flightId){
        try{
            const response=await this.FlightRepository.deleteFlight(flightId)
            return response;
        }
        catch(error){
            console.log("Something went wrong in the service layer")
            throw error;
        }
    }
}

module.exports=FlightService;
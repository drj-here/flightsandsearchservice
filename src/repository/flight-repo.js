const {Flights}=require('../models/index')
const {Op}=require('sequelize')
class FlightRepository{

    #createFilter(data){
     let filter={};
     if(filter.arrivalAirportId){
        filter.arrivalAirportId=data.arrivalAirportId
     }
     if(filter.departureAirportId){
        filter.departureAirportId=data.departureAirportId
     }
    
    //  if (data.minPrice && data.maxPrice) {
    //     Object.assign(filter, {
    //         [Op.and]: [
    //             { price: { [Op.gte]: data.minPrice } },
    //             { price: { [Op.lte]: data.maxPrice } }
    //         ]
    //     });
    // }

    //  if(data.minPrice){
    //     Object.assign(filter,{price:{[Op.gte]:data.minPrice}})
    //  }
    //  if(data.maxPrice){
    //     Object.assign(filter,{price:{[Op.lte]:data.maxPrice}})
    //  }
    

    let priceFilter=[];
    if(data.minPrice){
        priceFilter.push({price:{[Op.gte]:data.minPrice}})
    }
    if(data.maxPrice){
        priceFilter.push({price:{[Op.lte]:data.maxPrice}})
    }

    Object.assign(filter,{[Op.and]:priceFilter})

     return filter
 }
    
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

    async getFlight(flightId){
        try{
           const flight=await Flights.findByPk(flightId);
           console.log(flight)
           return flight;
        }
        catch(error){
            console.log("Something went wrong in the repo layer")
            throw error;
        }
    }

    async getAllFlight(filter){
        try{
            const filterObject=this.#createFilter(filter) 
            console.log(filterObject)
           const flight=await Flights.findAll({
            where:filterObject
           });
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

    async updateFlight(flightId,data){
        try{
           await Flights.update(data,{
            where:{
                id:flightId
            }
           })
           return true;
        }
        catch(error){
            console.log("Something went wrong in repo layer")
            throw error;
        }
    }
}

module.exports=FlightRepository
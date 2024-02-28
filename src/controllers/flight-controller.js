const {FlightService}=require('../service/index')
const flightService=new FlightService();
const {SuccessCodes}=require('../utils/Error-codes')
const create=async(req,res)=>{
    try{
        const flightRequestData={
            flightNumber:req.body.flightNumber ,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price
        }
       const flight=await flightService.createFlight(flightRequestData)
       return res.status(SuccessCodes.CREATED).json(
        {
            data:flight,
            success:true,
            message:"created flight successfully",
            err:{}
        }
       )
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create the flight",
            err:error
        })
    }
}

const getAll=async (req,res)=>{
    try{
        const response=await flightService.getAllFlight(req.body)
        return res.status(SuccessCodes.OK).json(
            {
                data:response,
                success:true,
                message:"flights fetched successfully",
                err:{}
            }
        )
    }
    catch(error){
        return res.status(500).json(
            {
                data:{},
                success:false,
                message:"not able to get the flights",
                err:error
            }
        )
    }
}

module.exports={
    create,
    getAll
}
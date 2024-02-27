const {FlightService}=require('../service/index')
const flightService=new FlightService();

const create=async(req,res)=>{
    try{
       const flight=await flightService.createFlight(req.body)
       return res.status(201).json(
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

module.exports={
    create
}
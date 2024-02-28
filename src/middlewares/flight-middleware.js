const validateCreateFlight=(req,res,next)=>{
    if(!req.body.flightNumber || 
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
        )
        {
            return res.status(400).json({
                data:{},
                message:'all fields are required',
                success:false,
                error:"fill all the credentials to create the flight"
            })
        }
        next();
}

module.exports={validateCreateFlight}
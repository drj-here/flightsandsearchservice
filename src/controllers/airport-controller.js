const {AirportService}=require('../service/index')

const airportService=new AirportService()

const create=async(req,res)=>{
    try{
       const result=await airportService.create(req.body)
       return res.status(201).json({
        success:true,
        message:'created the airport successfully',
        data:result,
        err:{}
       })
    }
    catch(error){
        return res.status(500).json({
            data:{},
            success:false,
            message:'could not create airport',
            err:error
        })
    }
}

module.exports={
    create
}
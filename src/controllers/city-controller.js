const {CityService}=require('../service/index');
const cityService=new CityService();

const create=async(req,res)=>{
    try{
        const city=await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true, 
            message:"Successfully created the city",
            err:{}
        })
        
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create the city",
            err:error 
        })
    }
}

const destroy=async(req,res)=>{
   try{
    const response=await cityService.deleteCity(req.params.id);
    return res.status(200).json({
        data:response,
        success:true, 
        message:"Successfully deleted the city",
        err:{}
    })
   }
   catch(error){
    console.log(error)
    return res.status(500).json({
        data:{},
        success:false,
        message:"Not able to delete the city",
        err:error 
    })
   } 
}

const update=async(req,res)=>{
    try{ 
        const response=await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data:response,
            success:true,
            message:"city updated successfully",
            err:{}
        })
        
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to update the city",
            err:error 
        })
    }
}

const get=async(req,res)=>{
    try{
        const city=await cityService.getCity(req.params.id)
        return res.status(200).json({
            data:city,
            success:true,
            message:"successfully fetched the city",
            err:{}
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get the city",
            err:error 
        })
    }
}

const getAll=async(req,res)=>{
    try{
        const cities=await cityService.getAllCities(req.query)
        return res.status(200).json({
            data:cities,
            success:true,
            message:"successfully fetched the cities",
            err:{}
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch the cities",
            err:error 
        })
    }
}

const getAirports=async(req,res)=>{
    try{
        const airports=await cityService.getCityAirports(req.params.id)
        return res.status(200).json({
            data:airports,
            success:true,
            message:"successfully fetched the airports",
            err:{}
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to get the airports",
            err:error 
        })
    }
}

module.exports={
    create,
    destroy,
    update,
    get,
    getAll ,
    getAirports
}
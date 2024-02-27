const express=require('express')
const bodyparser=require('body-parser')
const {PORT}=require('./config/serverConfig')
const ApiRoutes=require('./routes/index')
// const db=require('./models/index')
const {City,Airport,Airplane}=require('./models/index')
const setupAndStartServer=async ()=>{
    const app=express();
    
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}))

    app.use('/api',ApiRoutes)
    
    app.listen(PORT,async ()=>{
        console.log(`Server started at port ${PORT}`)

        // db.sequelize.sync({alter:true})
        // const city=await City.findOne({where:{id:4}})
        // const airports=await city.getAirports()
        // console.log(airports)
        
    })
}

setupAndStartServer();
const express=require('express')
const app=express()
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/error-handeller')

//middleware
app.use(express.static('./public'))   //to serve static files
app.use(express.json())

//routes

app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

//port
const port=process.env.PORT ||  3000   //important for hosting part

const start= async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,(req,res)=>{console.log(`server listening on port ${port}...`)})
        
    } catch (error) {
        console.log(error)
    }
}
start()
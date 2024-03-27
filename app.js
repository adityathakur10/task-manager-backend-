const express=require('express')
const app=express()
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect')
require('dotenv').config()

//middleware
app.use(express.json())




//routes

app.get('/hello',(req,res)=>{
    res.send(`hey man how are you??`)
})


app.use('/api/v1/tasks',tasks)



const port=3000

const start= async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,(req,res)=>{console.log(`server listening on port ${port}...`)})
        
    } catch (error) {
        console.log(error)
    }
}
start()
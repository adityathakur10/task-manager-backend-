const Task=require('../models/task')

const getAllTasks=async(req,res)=>{
    try {
        const tasks=await Task.find({})
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
    
}
const createTask=async(req,res)=>{
    try {
        const task=await Task.create(req.body)
        res.status(201).json({task});
        
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
    
}
const getTasks=async(req,res)=>{
    try {
        const {id:taskId}=req.params
        const task=await Task.findOne({_id:taskId})
        if(!task){
            return res.status(404).json({msg:`no task id with : ${taskId}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json({msg:error.message})

    }
}
const deleteTasks=async(req,res)=>{
    try {
        const {id:taskId}=req.params 
        const task=await Task.findOneAndDelete({_id:taskId})
        if(!task){
            return res.status(404).json({msg:`no task id with : ${taskId}`})
        }
        res.status(200).json({task})

    } catch (error) {
        return res.status(404).json({msg:`no task id with : ${taskId}`})
        
    }
}

const updateTasks=async(req,res)=>{
    try {
        const {id:taskId}=req.params
        const task=await Task.findOneAndUpdate({_id:taskId},req.body,{
            new:true,
            runValidators:true
        })
        if(!task){
            return res.status(404).json({msg:`no task id with : ${taskId}`})

        }
        res.status(200).json({task})
    } catch (error) { 
        return res.status(404).json({msg:`no task id with : ${taskId}`})

    }
}

module.exports={
    getAllTasks,createTask,
    deleteTasks,
    getTasks,updateTasks,
}
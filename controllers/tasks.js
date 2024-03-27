const Task=require('../models/task')

const getAllTasks=(req,res)=>{
    res.json(req.body)
}
const createTask=async(req,res)=>{
    const task=await Task.create(req.body)
    res.status(201).json({task});
}
const getTasks=(req,res)=>{
    res.json({id:req.params.id})
}
const updateTasks=(req,res)=>{
    res.send('update Tasks')
}
const deleteTasks=(req,res)=>{
    res.send('delete task')
}


module.exports={
    getAllTasks,createTask,
    deleteTasks,
    getTasks,updateTasks,
}
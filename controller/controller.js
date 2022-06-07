const Task = require('../model/Task')

const getSingleTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return res.status(500).json({msg:`No such task with id:${taskID}`})
        }
        res.status(200).json({success:true,task:task})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const getAllTask = async (req,res)=>{
    try {
       const task =  await Task.find({})
       res.status(200).json({success:true,task})
    } catch (error) { 
        res.status(404).json({msg:error})
    }
}


const createTask = async (req,res) =>{
    try {
        
        const task = await Task.create(req.body)
        res.status(201).json({task})
        
    } catch (error) {
        res.status(500).json({msg:error})    
    }

}

const updateTask = async(req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new :true, runValidators:true
        })
        if(!task){
            res.status(500).json({msg:`no such task`})
        }
        res.status(200).json({success:true})
    } catch (error) {
        res.status(404).json({msg:error})
    }
}

const deleteTask = async (req,res)=>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return res.status(500).json({msg:`No such task with id:${taskID}`})
        }
        res.status(200).json({success:true,msg:`deleted ${taskID} successfully`})

    } catch (error) {
        res.status(404).json({msg:error})
    }
}

module.exports = {
    getAllTask,
    createTask,
    deleteTask,
    updateTask,
    getSingleTask,
}
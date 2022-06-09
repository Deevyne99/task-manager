const Task = require('../model/Task')
const asyncWrapper = require('../middleware/asyncWrapper')
const {createCustomerror} = require('../error/customApi')
const getSingleTask = asyncWrapper (async (req,res,next)=>{
        const {id:taskID} = req.params
        const tasks = await Task.findOne({_id:taskID})
        if(!tasks){
            return next(createCustomEror(`No such task with id:${taskID}`,404))
            
        }
        res.status(200).json({success:true,task:tasks})
    
})

const getAllTask = asyncWrapper( async (req,res)=>{
    
       const tasks =  await Task.find({})
       res.status(200).json({success:true,tasks})
    
}
)

const createTask = asyncWrapper(  async (req,res) =>{
    
        
        const tasks = await Task.create(req.body)
        res.status(201).json({tasks}) 

})

const updateTask = asyncWrapper(  async(req,res)=>{
        const {id:taskID} = req.params
        const tasks = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new :true, runValidators:true
        })
        if(!tasks){
            return next(createCustomEror(`No such task with id:${taskID}`,404))

        }
        res.status(200).json({success:true})
  
}
)
const deleteTask = asyncWrapper(  async (req,res)=>{
        const {id:taskID} = req.params
        const tasks = await Task.findOneAndDelete({_id:taskID})
        if(!tasks){
           return next(createCustomEror(`No such task with id:${taskID}`,404))

        }
        res.status(200).json({success:true,msg:`deleted ${taskID} successfully`})

  
})

module.exports = {
    getAllTask,
    createTask,
    deleteTask,
    updateTask,
    getSingleTask,
}
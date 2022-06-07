const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"this field is required"],
        maxlength:[20,"max length is 20 characters."]
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('Task', TaskSchema)
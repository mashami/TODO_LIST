const mongoose= require("mongoose")

const Schema=mongoose.Schema

const workoutSchema= new Schema ({
    task: {
       type:String,                  
       required: true
       
    },
    
    description:{
        type:String,
        required:true

    },
    start_date:{
        type:String,
        required:true
    },
    End_date:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:false
    }

}, {timestamps: true});

module.exports = mongoose.model("Workout", workoutSchema)


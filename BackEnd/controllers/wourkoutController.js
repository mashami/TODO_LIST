const Workout= require("../models/workoutModel")
const mongoose = require("mongoose")
//get All workout 
const getworkouts = async (req, res) =>{
    const workouts= await Workout.find()
    res.status(200).json({workouts})
}


   
//get a single workout 
const getoneWorkout = async (req, res) => {
     const { id } = req.params

     if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout in application"})

     }

     const workout = await Workout.findById(id)

    if (!workout) {
        return res.status (400).json({ error: "No such that workout"})

    }
    res.status(200).json(workout);
}


//post a new woukout

const createWorkout = async (req, res)=>{
    const {task, description, start_date, End_date, category}= req.body
    
    //add to database
    try{
        const workout = new Workout(req.body)
        workout.save()
         res.status(200).json(workout)
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error})

    }
}

//delete a workout

const DeleteWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout in application"})

     }

    const workout = await Workout.findByIdAndDelete ({_id:id})
    if (!workout) {
        return res.status (400).json({ error: "No such that workout"})

    }
    res.status(200).json(workout);

}

//update a wourkout

const UpdateWorkout = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such workout in application"})
    
     }
     const workout = await Workout.findByIdAndUpdate ({_id:id }, {$set:req.body},{
        new:true
     })
     return res.status(200).json(workout)

}





module.exports = {
    getworkouts,
    createWorkout,
    getoneWorkout,
    DeleteWorkout,
    UpdateWorkout,
}
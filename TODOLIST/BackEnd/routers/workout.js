const express= require("express");

const { modelNames } = require("mongoose");

const router =express.Router();
const {
    
    getoneWorkout,
    getworkouts,
    createWorkout,
    UpdateWorkout, 
    DeleteWorkout,
}= require ("../controllers/wourkoutController")

// get all workout

router.get("/",getworkouts)

//get a single workout
router.get("/:id", getoneWorkout)


//post a workout
router.post("/", createWorkout)
    


//delete a sigle workout
router.delete("/:id",  DeleteWorkout)

//update a single workout
router.patch("/:id", UpdateWorkout)

module.exports = router
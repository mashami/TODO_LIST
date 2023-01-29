require("dotenv").config();

const { config } = require("dotenv");
const express = require("express")
const workoutRoutes = require("./routers/workout")
const cors = require('cors');

//express app

const app = express();

//access to get and post data to the database
app.use(cors({
    origin:'*',
    optionsSuccessStatus: 200 
}));
//Database

const mongoose = require("mongoose")
require('dotenv').config()

mongoose.set('strictQuery', true);
mongoose.connect(process.env.Mongo_URL)
    .then(() => {
        //listening to server

        app.listen(process.env.PORT, () => {
            console.log("Connected to database $ Server Its listening on port", process.env.PORT)

        })
    }).catch(error => console.log(error.message));
        //middleware
        app.use(express.json())

        app.use((req, res, next) => {
            console.log(req.path, req.method)
            next();
        })


        // routers

        // app.get("/", (req, res)=>{
        //     res.json({msg:"welcome to the first my app"})
        // }
        // )

        app.use('/api/workout', workoutRoutes)


    


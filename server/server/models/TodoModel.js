'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const TodoSchema = new Schema({
       
        title:{
            type:String,
            required:true
        },
        completed: {
            type:Boolean,
            default:false
        }
    });

// create and export model
module.exports = mongoose.model("todoModel", TodoSchema);
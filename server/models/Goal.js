const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({
    userId:{
        type: String,
        require: true,
    },
    username:{
        type: String,
        require: true,
    },
    title:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    status:{
        type: String,
        require: true,
    },
}, {timestamps: true})

module.exports = mongoose.model("Goal", GoalSchema);
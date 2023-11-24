const express = require('express');
const Goal = require('../models/Goal.js');

const router = express.Router();


//CREATE GOAL
router.post('/', async (req, res) => {

    const data = {
        userId: req.body.userId,
        username: req.body.username,
        title: req.body.title,
        description: req.body.description,
        status: "Created",
    };

    const newGoal = new Goal(data);

    try {
        const savedGoal = await newGoal.save();
        res.status(200).json(savedGoal);
    } catch (err) {
        res.status(500).json(err);
    }
})


//UPDATE GOAL
router.put('/', async (req, res) => {
    try {
        const goal = await Goal.findById(req.body.goalId);

        if (req.body.status === 'Failed'|| req.body.status === 'Succeeded') {
            if (goal.userId === req.body.userId) {
                await goal.updateOne({$set:{status: req.body.status}});
                res.status(200).json('The goal has been updated');
            } else {
                res.status(400).json('You can update only your goal');
            }
        } else {
            res.status(400).json('You either failed or succeeded');
        }
    } catch (err) {
        res.status(500).json(err);
    }
});


//GET GOAL(S)
router.get('/', async (req, res) => {
    const goals = await Goal.find(req.query || {}).sort({updatedAt: 1});
    res.status(200).json(goals);
});

module.exports = router;
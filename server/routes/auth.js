const express = require('express');
const router = express.Router();

const User = require('../models/User.js');
const bcrypt = require('bcryptjs');


//REGISTER
router.post("/register", async (req, res) => {
    try {
        //Generate new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
      
        //Create new user
        const newUser = new User({
            username: req.body.username,
            password: hashedPassword,
        });
    
        //Save user and respond
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});


//LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            res.status(403).json("user not found");
        } else {
            const validPassword = await bcrypt.compare(req.body.password, user.password);
            if (!validPassword) {
                res.status(403).json("wrong password");
            } else {
                res.status(200).json(user);
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
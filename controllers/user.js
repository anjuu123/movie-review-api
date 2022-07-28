const User = require('../models/user');

exports.create = async(req, res) => {
    const { name, email, password } = req.body;

    // preventing duplicacy
    const oldUser = await User.findOne({email});
    if(oldUser) return res.status(401).json({error:"email is already in use"})
    const newUser = new User({name, email, password});
    await newUser.save()

    res.status(201).json({user: newUser})
};
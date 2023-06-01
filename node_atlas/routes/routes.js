const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const tokenMiddleware = require('../middleware/tokenMiddleware');
const User = require('../modles/module');

// User registration endpoint
router.post('/register', async(req, res) => {
   
    const { error } = validate(req.body);
    if (error)
        return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });
});

// User login endpoint
router.post('/login', passport.authenticate('local'), async(req, res) => {
    const { error } = validate(req.body);
    if (error)
        return res.status(400).send({ message: "wrong" });

    const user = await User.findOne({ email: req.body.email });
});

// Protected route
router.get('/protected', tokenMiddleware, (req, res) => {
    User.find()
    .then(e=>res.status(200).json({e}))
    .catch(err=>res.status(400).json("Err" + err))
});

module.exports = router;

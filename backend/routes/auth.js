const express = require('express');
const router = express.Router();
const { signup,signin, logout} = require('../controllers/authcontroller');
const middleware = require('../middleware/authmiddleware');


// POST /signup
router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logout', logout);
console.log(signup, signin, logout);
router.get('/dashboard',middleware,(req,res)=>
{
    res.json(
        {
            message : "profile data",
            user : req.user
        }
    )
})
module.exports = router;
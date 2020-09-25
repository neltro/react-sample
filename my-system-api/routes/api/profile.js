const express = require('express');
const { check, validationResult } = require('express-validator');
const { profileService, getProfile } = require('../../services/profileService');
const router = express.Router();

router.post('/', 
[
    check('email', 'Please include valid email.')
        .isEmail(),
    check('name', 'Name is required.')
        .notEmpty()
],
async (req,res) => {
    const errors = validationResult(req);
    console.log('post in profile');
    console.log(req.body);
    if (!errors.isEmpty()){
        console.log('validation error');
        console.log(errors);
        res.status(400).json({errors: errors.array()});
    } else {
        const result = await profileService(req.body);
        console.log('post');
        console.log(result);
        if (result.success)
            res.send(result);
        else
            res.status(400).json({ errors:[{ msg: result.msg }] });
    }   
});

router.get('/',
 async (req,res) => {
    const result =  await getProfile(req.query);
    console.log('get');
    console.log(result);
    if (result.success)
        res.send(result);
    else
        res.status(400).json({ errors:[{ msg: result.msg }] });
})

module.exports = router;
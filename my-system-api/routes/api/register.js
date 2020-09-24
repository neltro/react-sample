const express = require('express');
const { check, validationResult } = require('express-validator');
const { registerService } = require('../../services/registerService');
const router = express.Router();

router.post('/', 
[
    check('email', 'Please include valid email.')
        .isEmail(),
    check('name', 'Name is required.')
        .notEmpty(),
    check('password', 'Please enter password at least 6 or more characters.')
        .isLength({ min: 6 })
],
async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        res.status(400).json({errors: errors.array()});
    } else {
        const result = await registerService(req.body);
        if (result.success)
            res.send(result);
        else
            res.status(400).json({ errors:[{ msg: result.msg }] });
    }   
})

module.exports = router;
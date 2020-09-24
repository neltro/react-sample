const express = require('express');
const { check, validationResult } = require('express-validator');
const { userService } = require('../../services/userService');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../../config/default.json');

router.post('/', 
[
    check('email', 'Please include valid email.')
        .isEmail(),
    check('password', 'Please enter password at least 6 or more characters.')
        .isLength({ min: 6 })
], async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        res.status(400).json({errors: errors.array()});
    } else {
        const result = await userService(req.body);
        if (result.success) {
            const payload = {
                user: result.msg
            };

            jwt.sign(
                payload, 
                config.jwtSecret, 
                { expiresIn: 15*60 },
                (err, token) => {
                    if (err) {
                        res.send( {
                            success: false,
                            msg: err
                        });
                    }
                    res.send({
                        success: true,
                        token: token
                    });
                });
            }
        else
            res.status(400).json({ errors:[{ msg: result.msg }] });
    }   
})

module.exports = router;
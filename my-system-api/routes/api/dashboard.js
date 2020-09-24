const express = require('express');
const config = require('../../config/default.json');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/', (req,res) => {
    const token = req.header('x-auth-token');
    if (!token){
        res.status(401).json( {
            success: false,
            msg: 'No token, authorization denied.'
        });
    }
    try{
        console.log(token);
        const decoded = jwt.verify(token, config.jwtSecret);
        req.user = decoded.user;
        console.log('token still ok');
        res.send({ success: true, msg: 'dashboard'});
    } catch(err){
        console.log('token error');
        console.log(err.message);
        res.status(400).json({ 
            success: false, 
            errors:[{ msg: err.message }] 
        });
    }
});

module.exports = router;
const User = require('../models/User');
const bcryptjs = require('bcryptjs');

 const isInvalidUser = async (email, password) => {
    let user =  await User.findOne({ email: email });
    let isMatch = await bcryptjs.compare(password, user.password);
    return { isInvalid: !isMatch, name: user.name };
}

module.exports.userService = async (user) => {
    const { email, password } = user;
    try{
        const result = await isInvalidUser(email,password);
        if (result.isInvalid){
            return {
                success: false,
                msg: "Invalid Credentials." 
            };
        } 
        return {
            success: true,
            msg: email,
            name: result.name
        };
            
    } catch (err){
        return {
            success: false,
            msg: "Server Error"
        }
    }
}
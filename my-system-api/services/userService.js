const User = require('../models/User');
const bcryptjs = require('bcryptjs');

 const isInvalidUser = async (email, password) => {
    let user =  await User.findOne({ email: email });
    console.log(user.password);
    let isMatch = await bcryptjs.compare(password, user.password);
    console.log(isMatch);
    return !isMatch;
}

module.exports.userService = async (user) => {
    const { email, password } = user;
    try{
        const isInvalid = await isInvalidUser(email,password);
        if (isInvalid){
            return {
                success: false,
                msg: "Invalid Credentials." 
            };
        } 
        return {
            success: true,
            msg: email
        };
            
    } catch (err){
        return {
            success: false,
            msg: "Server Error"
        }
    }
}
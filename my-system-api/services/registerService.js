const User = require('../models/User');
const bcryptjs = require('bcryptjs');

 function isUserExists(email){
    let user =  User.findOne({ email: email });
    console.log(user);
    return (user);
}

 function createUser(name, email, password){
    const salt =  bcryptjs.genSalt(10);
    const newUser = new User({
        name: name,
        email: email,
        password:  bcryptjs.hash(password,salt)
    });
    // await newUser.save();
    return { success: true, msg: 'Save successfully.' }
}

module.exports.registerService =  (user) => {
    const { name, email, password } = user;
    try{
        if (isUserExists(email)){
            return {
                success: false,
                msg: "Email already exists." 
            };
        } 
        return  createUser(name, email, password);
    } catch (err){
        return {
            success: false,
            msg: err // s"Server Error"
        }
    }
}
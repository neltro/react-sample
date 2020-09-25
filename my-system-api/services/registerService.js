const User = require('../models/User');
const bcryptjs = require('bcryptjs');

 const isUserExists = async (email) => {
    let user =  await User.findOne({ email: email });
    return (user);
}

 const createUser = async (name, email, password) => {
    const salt =  await bcryptjs.genSalt(10);
    const newUser = new User({
        name: name,
        email: email,
        password:  await bcryptjs.hash(password,salt)
    });
    await newUser.save();
    return { success: true, msg: 'Successfully saved.' }
}

module.exports.registerService = async (user) => {
    const { name, email, password } = user;
    try{
        const isExists = await isUserExists(email);
        if (isExists){
            return {
                success: false,
                msg: "Email already exists." 
            };
        } 
        const result = await createUser(name, email, password);
        return result;
    } catch (err){
        return {
            success: false,
            msg: err // s"Server Error"
        }
    }
}
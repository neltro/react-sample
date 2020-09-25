const User = require('../models/User');

 const updateUser = async (user) => {
    const { name, email, oldEmail } = user;
    let profile =  await User.findOne({ email: oldEmail });
    if (profile){
        profile.name = name;
        profile.email = email;
        await profile.save();
        return { success: true, msg: 'Successfully updated.' }
    }
    return { success: false, msg: 'User not found.'}
}

const getUser = async (user) => {
    const { email } = user;
    if (email){
        let foundUser =  await User.findOne({ email: email });
        if (foundUser){
            return {
                success: true,
                user: {
                    name: foundUser.name,
                    email: foundUser.email
                }
            };
        } else {
            return {
                success: false,
                msg: 'User not found.'
            }
        }
    }
    return {
        success: false,
        msg: 'Email is missing.'
    }
}

module.exports.profileService = async (user) => {
    try{
        const result = await updateUser(user);
        return result;
    } catch (err){
        console.log('err in profileService');
        console.log(err);
        return {
            success: false,
            msg: err // s"Server Error"
        }
    }
}

module.exports.getProfile = async (user) => {
    try{
        console.log('inside getProfile async');
        console.log(user); 
        const result = await getUser(user);
        return result;
    } catch (err){
        return {
            success: false,
            msg: err // s"Server Error"
        }
    }
}
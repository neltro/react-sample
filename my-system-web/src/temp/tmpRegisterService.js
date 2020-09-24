const config = require('../config/default.json');
const axios = require('axios');

module.exports.registerService = async (user) => {
    const { name, email, password } = user;
    try{
        const res = await axios.post(config.mySystemServiceAPI.register, {
                'name': name,
                'email': email,
                'password': password
        });
        return res.data;
    } catch (err){
        console.log(err.response.data.errors);
        return {
            success: false,
            msg: err.response.data.errors || err 
        }
    }
}
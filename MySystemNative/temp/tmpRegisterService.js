const config = require('../config/default.json');
const axios = require('axios');

const registerService = async (user) => {
    const { name, email, password } = user;
    try{
        const res = await axios.post(config.mySystemServiceAPI.register, {
                'name': name,
                'email': email,
                'password': password
        });
        return res.data;
    } catch (err){
        return {
            success: false,
            msgs: err.response.data.errors || err 
        }
    }
}
export default registerService;
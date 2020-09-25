const config = require('../config/default.json');
const axios = require('axios');

const userService = async (user) => {
    const { email, password } = user;
    try{
        const res = await axios.post(config.mySystemServiceAPI.user, {
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
export default userService;
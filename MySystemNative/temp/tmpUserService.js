import config from '../config/default.json';
import axios from 'axios';

const userService = async (user) => {
    const { email, password } = user;
    try{
        const res = await axios.post(config.mySystemServiceAPI.user, {
                'email': email,
                'password': password
        });
        return res.data;
    } catch (err){
        console.log(err.response);
        return {
            success: false,
            msg: err.response.data.errors || err 
        }
    }
}
export default userService;
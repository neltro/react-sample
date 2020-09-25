import config from '../config/default.json';
import axios from 'axios';

const userService = async (user) => {
    const { email, password } = user;
    console.log('userService');
    console.log(email);
    console.log(password);
    try{
        const res = await axios.post(config.mySystemServiceAPI.user, {
                'email': email,
                'password': password
        });
        console.log(res.data);
        return res.data;
    } catch (err){
        console.log('err in tmpUserService');
        console.log(err.response);
        return {
            success: false,
            msg: err.response.data.errors || err 
        }
    }
}
export default userService;
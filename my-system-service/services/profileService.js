import config from '../config/default.json'; 
import axios from 'axios';

const profileService = async (user) => {
    const { name, email, oldEmail } = user;
    try{
        const res = await axios.post(config.mySystemServiceAPI.profile, {
                'name': name,
                'email': email,
                'oldEmail': oldEmail
        });
        return res.data;
    } catch (err){
        console.log(err.response.data.errors);
        return {
            success: false,
            msgs: err.response.data.errors || err 
        }
    }
}

const getProfile = async (user) => {
    const { email } = user;
    try{
        console.log(email);
        if (email !== ''){
            const res = await axios.get(config.mySystemServiceAPI.profile,{
                params: { email: email }
            });
            return res.data;
        } else {
            return {
                success: false,
                msg: 'Email is missing'
            }
        }
    } catch (err){
        return {
            success: false,
            msgs: err.response.data.errors || err 
        }
    }
}

export {
    profileService,
    getProfile
}
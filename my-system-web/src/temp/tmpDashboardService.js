const config = require('../config/default.json');
const axios = require('axios');

module.exports.dashboardService = async (token) => {
    try{
        let result = await axios.get(config.mySystemServiceAPI.dashboard, {
                headers: {
                    'x-auth-token': token
                }
        }); 
        return result.data;
    } catch (err){
        return {
            success: false,
            msgs: err.response.data.errors || err 
        }

    };
}
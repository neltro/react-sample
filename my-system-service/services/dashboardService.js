const config = require('../config/default.json');
const axios = require('axios');

module.exports.dashboardService = (token) => {
    try{
        const res = axios.get(config.mySystemServiceAPI.dashboard, {
                headers: {
                    'x-auth-token': token
                }
        });
        return res.data;
    } catch (err){
        return {
            success: false,
            msgs: err.response.data.errors || err 
        }
    }
}
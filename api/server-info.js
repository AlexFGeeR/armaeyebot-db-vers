const axios = require('axios');

async function getServerInfo() {
    let data;
    await axios
        .get('https://api.battlemetrics.com/servers/1631443?include=player')
        .then(res => {
            data = res.data;
        })
        .catch(error => {
            console.log(error);
        })
    return data;
}

module.exports = { getServerInfo };
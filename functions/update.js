const {getServerInfo} = require('../api/server-info');
const {actionRowManager} = require('../ActionRows/actionRow.manager');
const {playerListAnalyzer} = require('./playerlistAnalyzer');
const {sendAlert} = require("./sendalert");
const {pullPlayersData} = require('../db/functions/pullPlayersData');

async function update(msg) {
    setInterval(async function() {
        const data = await getServerInfo();
        if (data === undefined) return;
        const playerList = data.included;
        const manager = await actionRowManager(data);
        const analyzer = await playerListAnalyzer(playerList); // return ['type', players] or 0
        if (manager === 0) return;
        msg.edit({content: ' ', embeds: [manager[0]], components: [manager[1]]});

        // send data in db about connect or disconnect;
        if (analyzer !== 0) {
            await pullPlayersData(analyzer);

            if ( manager[2] === true ){
                sendAlert(analyzer[0], analyzer[1]);
            }

        };
    }, 10000)
}

module.exports = { update }
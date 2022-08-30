const MODELS = require('../models');

async function pullPlayersData(arr) { // arr - ['type', players[]];
    switch (arr[0]) {
        case 'connect': {
            arr[1].forEach(async player => {
                const finder = await MODELS.Players.findOne({where: {bId: player.attributes.id}});
                if (finder == null) {
                    console.log('Внесение в базу данных нового игрока при коннекте.');
                    await MODELS.Players.create({bId: player.attributes.id, name: player.attributes.name, AllianceId: 1, Humanity: 0, AvgOnline: 0, connectionTime: null, disconnectionTime: null});
                }
                if (finder != null) {
                    //await finder.setDataValue('connectTime', dateNow);
                }
            });
            // check player is exist in the table, if not pull all data else put only connection data with setter
            break;
        }

        case 'disconnect': {
            arr[1].forEach(async player => {
                const finder = await MODELS.Players.findOne({where: {bId: player.attributes.id}});
                if (finder == null) {
                    console.log('Внесение в базу данных нового игрока при дисконнекте.');
                    await MODELS.Players.create({bId: player.attributes.id, name: player.attributes.name, AllianceId: 1, Humanity: 0, AvgOnline: 0, connectionTime: null, disconnectionTime: null});
                }
                if (finder != null) {
                    //await finder.setDataValue('connectTime', dateNow);
                }
            });
            // disconnect time is equal none;
            // check player is exists in the table, if not pull all data else put only disconnect data with setter
            // function with calculate and set the avgOnline data;
            break;
        }
    }
}

module.exports = {pullPlayersData}
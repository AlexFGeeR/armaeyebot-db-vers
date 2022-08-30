const MODELS = require('../models');

async function botInit() {
    // todo check db exists players
    const finder = await MODELS.Alliance.findByPk(1);
    if ( finder == null ) {
        console.log('Создание пустого альянса!');
        await MODELS.Alliance.create({name: 'None', PlayersCount: 0, Base: 0, OnlineWindow: 'none'});
    }
}

module.exports = { botInit }
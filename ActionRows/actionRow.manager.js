const {statusEmbed} = require('../embeds/status.embed');
const {alertButton} = require('./components/alert.button')
const {statusActionRow} = require('./status.actionrow');
const {playerListEmbed} = require("../embeds/playerList");
const {playerListActionRow} = require('./playerList.actionrow');
const {playerInfoEmbed} = require('../embeds/playerInfoSelect.embed');
const {playerInfoSelectActionRow} = require('./playerInfoSelect.actionrow');

let playerListFunc = false;
let alertFunc = false;
let playerInfoSelectFunc = false;

function turnAlertButton(label, style) {
    alertButton.setLabel(label);
    alertButton.setStyle(style);
}

function turnAlert() {
    alertFunc = !alertFunc;
}

function turnPlayerInfoSelect() {
    playerInfoSelectFunc = !playerInfoSelectFunc;
}

function turnPlayerList() {
    playerListFunc = !playerListFunc;
}

// visual of future embed and button status ( on or off );
async function actionRowManager(data) {
    const status = await statusEmbed(data.data.attributes.name, data.data.attributes.players);
    const playerList = await playerListEmbed(data.data.attributes.name, data.included);
    const playerInfoSelect = await playerInfoEmbed();
    const playerInfoAction = await playerInfoSelectActionRow();
    // В зависимости от переменных выше будет возвращать определенный массив [emb, actionrow]
    if (playerListFunc === false && alertFunc === false && playerInfoSelectFunc === false) {
        turnAlertButton('Включить', 'SUCCESS');
        return [status, statusActionRow, alertFunc];
    } else if (playerListFunc === false && alertFunc === true && playerInfoSelectFunc === false ) {
        turnAlertButton('Выключить', 'DANGER');
        return [status, statusActionRow, alertFunc];
    } else if (playerListFunc === true ) {
        return [playerList, playerListActionRow, alertFunc];
    } else if ( playerInfoSelectFunc === true ) {
        // return [embed, actionRow, alertFunc];
        return [playerInfoSelect, playerInfoAction, alertFunc];
    }
    return 0;
}

module.exports = {actionRowManager, turnPlayerList, turnAlert, turnPlayerInfoSelect}
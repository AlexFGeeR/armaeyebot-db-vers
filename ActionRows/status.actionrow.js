const {MessageActionRow} = require('discord.js');
const {alertButton } = require('./components/alert.button');
const {playerListButton} = require('./components/playerlist.button');
const {playerInfoButton} = require('./components/playerInfo.button');

const statusActionRow = new MessageActionRow()
    .addComponents(playerListButton, alertButton, playerInfoButton);

module.exports = {statusActionRow};
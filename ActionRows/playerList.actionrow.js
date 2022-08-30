const {MessageActionRow} = require('discord.js');
const {closeButton} = require('./components/close.button');

closeButton.setCustomId('closePlayerList');

const playerListActionRow = new MessageActionRow()
    .addComponents(closeButton);

module.exports = {playerListActionRow};
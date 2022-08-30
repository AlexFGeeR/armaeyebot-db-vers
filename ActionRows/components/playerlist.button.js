const { MessageButton } = require('discord.js');

const playerListButton = new MessageButton()
    .setCustomId('playerList')
    .setLabel('Список игроков')
    .setStyle('SECONDARY');

module.exports = { playerListButton }
const { MessageButton } = require('discord.js');

const playerInfoButton = new MessageButton()
    .setCustomId('playerInfo')
    .setLabel('Информация об игроке')
    .setStyle('SECONDARY');

module.exports = { playerInfoButton }
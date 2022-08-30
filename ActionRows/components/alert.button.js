const { MessageButton } = require('discord.js');

const alertButton = new MessageButton()
    .setCustomId('alert')
    .setLabel('None')
    .setStyle('SECONDARY')

module.exports = { alertButton }
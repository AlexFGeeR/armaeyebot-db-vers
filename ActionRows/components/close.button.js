const { MessageButton } = require('discord.js');

const closeButton = new MessageButton()
    .setCustomId('close')
    .setLabel('Закрыть')
    .setStyle('DANGER');

module.exports = { closeButton }
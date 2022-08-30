const { MessageEmbed } = require('discord.js');

const disconnectEmbed = new MessageEmbed()
    .setColor('#FF0000')
    .setTitle('None')
    .setDescription('Отключился от сервера');

module.exports = { disconnectEmbed }
const { MessageEmbed } = require('discord.js');

const connectEmbed = new MessageEmbed()
    .setColor('#04FF00')
    .setTitle('None')
    .setDescription('Подключился к серверу')

module.exports = { connectEmbed }
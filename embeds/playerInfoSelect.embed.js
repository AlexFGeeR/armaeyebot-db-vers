const {MessageEmbed} = require('discord.js');

function playerInfoEmbed() {
    return new MessageEmbed()
        .setColor('#4352c1')
        .setTitle('Выберите игрока')
        .setDescription('Выбрав игрока вы сможете узнать подробную информацию, которая хранится в нашей базе данных о нём');
}

module.exports = {playerInfoEmbed}
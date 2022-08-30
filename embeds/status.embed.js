const {MessageEmbed} = require('discord.js');

function statusEmbed(name, players) {
    let nowDate = new Date().toLocaleString('ru-RU', {timeZone: 'Europe/Samara'});
    if ( !name ) {
        return new MessageEmbed()
            .setColor('#FF0000')
            .setTitle('Произошла ошибка подключения')
            .setDescription('Подождите следующего обновления данных.')
            .setFooter({text: `Время последнего обновления: ${nowDate}`});
    };
    return new MessageEmbed()
        .setColor('#246e38')
        .setTitle(name)
        .setDescription(`Количество игроков: ${players}`)
        .setFooter({text: `Время последнего обновления: ${nowDate}`});
}

module.exports = { statusEmbed };
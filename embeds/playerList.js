const { MessageEmbed } = require('discord.js');

async function playerListEmbed(name, playerList) {
    const dateNow = new Date().toLocaleString('ru-RU', {timeZone: 'Europe/Samara'});
    let string = '';
    let counter = 0;
    playerList.forEach(player => {
        string = string + `${player.attributes.name}\n`;
        counter++;
    });
    return new MessageEmbed()
        .setColor('#246E38')
        .setTitle(name)
        .setDescription(string)
        .addField('Количество игроков в списке: ', counter.toString(), true)
        .setFooter({text: `Время последнего обновления: ${dateNow}`});
}

module.exports = {playerListEmbed};
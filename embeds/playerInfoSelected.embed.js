const {MessageEmbed} = require('discord.js');
const MODELS = require('../db/models');

async function playerInfoSelectedEmbed(id) {
    const finder = await MODELS.Players.findOne({where: {bId: id}});
    return new MessageEmbed()
        .setColor('#11d2f3')
        .setTitle(`${finder.name}`)
        .setDescription('Информация об игроке из базы данных: ARMA-EYE')
        .addFields([
            {
                name: 'Battlemetric ID',
                value: `${finder.bId}`
            },
            {
                name: 'ID Альянса',
                value: `${finder.AllianceId}`,
                inline: true
            },
            {
                name: 'Альянс',
                value: `coming soon`,
                inline: true
            },
            {
                name: 'Средний онлайн',
                value: `${finder.AvgOnline}`
            },
            {
                name: 'Окно онлайна',
                value: `${finder.OnlineWindow}`
            }
        ]);
}

module.exports = {playerInfoSelectedEmbed}
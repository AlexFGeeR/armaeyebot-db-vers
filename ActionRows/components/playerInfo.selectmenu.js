const { MessageSelectMenu} = require('discord.js');

const playerInfoSelectMenu = new MessageSelectMenu()
        .setCustomId('playerInfo')
        .setPlaceholder('Выберите игрока...');

module.exports = {playerInfoSelectMenu}
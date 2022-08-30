const {MessageActionRow} = require('discord.js');
const {playerInfoSelectMenu} = require('./components/playerInfo.selectmenu');
const MODELS = require('../db/models');

let currentPage = 0;

const previousPage = {
    label: `Previous page`,
    description: '',
    value: 'previousPage'
}

const nextPage = {
    label: `Next page`,
    description: '',
    value: 'nextPage'
}

function splitArray(array, n) {
    let [...arr] = array;
    let res = [];
    while(arr.length) {
        res.push(arr.splice(0, n));
    }
    return res;
}

// async function turnNextPage(players) {
//     if (currentPage + 1 > players.length) {
//         await playerInfoSelectMenu.setOptions(previousPage, players[currentPage]);
//     } else if (currentPage === 0){
//         await playerInfoSelectMenu.setOptions(players[currentPage], nextPage);
//     } else {
//         await playerInfoSelectMenu.setOptions(previousPage, players[currentPage], nextPage);
//     }
// }

function turnNextPage() {
    currentPage += 1;
}

function turnPreviousPage() {
    currentPage -= 1;
}

async function playerInfoSelectActionRow() {
    currentPage = 0;
    const finder = await MODELS.Players.findAll();
    let arr = [];
    if (finder.length === 0) {
        await playerInfoSelectMenu.setOptions([{
            label: 'Игроков нет',
            description: 'База пуста',
            value: 'nullPlayer'
        }]);
    } else {
        await finder.forEach(item => {
            arr.push({
                label: `${item.name}`,
                description: `Игрок`,
                value: `${item.bId}`
            })
        })
        const players = await splitArray(arr, 23); // return couple of arrays

        if (currentPage + 1 === players.length) {
            await playerInfoSelectMenu.setOptions(previousPage, players[currentPage]);
        } else if (currentPage === 0){
            await playerInfoSelectMenu.setOptions(players[currentPage], nextPage);
        } else {
            await playerInfoSelectMenu.setOptions(previousPage, players[currentPage], nextPage);
        }
        // await playerInfoSelectMenu.setOptions(players[0], nextPage);
        // todo multiply selectMenu 'cause we have limit to 25 labels;
        // idea to make a next page value, if that value being clicked next part of arr will be loaded.
    }
    return new MessageActionRow()
        .addComponents(playerInfoSelectMenu);
}

module.exports = {playerInfoSelectActionRow, turnNextPage, turnPreviousPage};
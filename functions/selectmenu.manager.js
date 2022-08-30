const {playerInfoSelectedEmbed} = require("../embeds/playerInfoSelected.embed");
const {turnPlayerInfoSelect} = require("../ActionRows/actionRow.manager");
const {turnNextPage, turnPreviousPage} = require("../ActionRows/playerInfoSelect.actionrow");

async function selectMenuManager(interaction) {

    if (interaction.values[0] === 'nextPage') {
        turnNextPage();
        interaction.deferReply();
    }

    if (interaction.values[0] === 'previousPage') {
        turnPreviousPage();
        interaction.deferReply();
    }

    const id = interaction.values[0];
    const emb = await playerInfoSelectedEmbed(id);
    interaction.reply({embeds: [emb]});
    setTimeout(() => {interaction.deleteReply()}, 60000);
    turnPlayerInfoSelect();
}

module.exports = {selectMenuManager}
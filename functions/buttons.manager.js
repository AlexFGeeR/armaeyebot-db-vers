const { turnPlayerList , turnAlert, turnPlayerInfoSelect } = require('../ActionRows/actionRow.manager');

function doneMessage(interaction) {
    interaction.reply('Идет обработка');
    setTimeout(() => interaction.editReply('Идет обработка.'), 1000);
    setTimeout(() => interaction.editReply('Идет обработка..'), 2000);
    setTimeout(() => interaction.editReply('Идет обработка...'), 3000);
    setTimeout(() => interaction.deleteReply(), 3000);
}

function buttonInteractionManager(interaction) {
    if ( interaction.customId === 'playerList' ) {
        turnPlayerList(); // change status of playerList interaction variable
        doneMessage(interaction);
    }

    if ( interaction.customId === 'closePlayerList') {
        turnPlayerList(); // change status of playerlist interaction variable
        doneMessage(interaction);
    }

    if ( interaction.customId === 'alert' ) {
        turnAlert(); // change status of alert interaction variable
        doneMessage(interaction);
    }

    if ( interaction.customId === 'playerInfo' ) {
        turnPlayerInfoSelect();
        doneMessage(interaction);
    }
}

module.exports = {buttonInteractionManager}
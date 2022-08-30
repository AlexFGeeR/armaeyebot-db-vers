const { Client, Intents, Collection } = require('discord.js');
require('dotenv').config();
const sequelize = require('./db/init');
const Process = require("process");
const fs = require('node:fs');
const { botInit } = require('./db/functions/dbfunctions.handler');
const {update} = require('./functions/functions.handler');
const {buttonInteractionManager} = require('./functions/buttons.manager');
const {selectMenuManager} = require('./functions/selectmenu.manager');

const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for ( const file of commandFiles ) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.once('ready', async () => {
    console.log(`Ready! Logged in as ${client.user.tag}`);
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('База данных успешно подключена.');
        botInit(); // make a zeroAlliance and check exists of him

        const statusChannel = client.channels.cache.find(channel => channel.id === Process.env.STATUS_CHANNEL);
        statusChannel.send('ArmaEye v1.1 - Инициализация - Автор: @Yeeeah#8896.').then(async msg => {
            await update(msg);
        });
    } catch (e) {
        console.log('Подключение к бд прошло неудачно.');
        console.log(e);
    }
});

client.on('interactionCreate', async interaction => {
    console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);

    if (interaction.isButton()) {
        buttonInteractionManager(interaction);
    }

    if (interaction.isSelectMenu()) {
        selectMenuManager(interaction);
    }
})

client.login(Process.env.DISCORD_TOKEN);

module.exports.bot = client;
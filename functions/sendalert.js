const index = require('../index');
const { connectEmbed } = require('../embeds/connect.embed');
const { disconnectEmbed } = require('../embeds/disconnect.embed');
const Process = require('process');

function sendAlert(isConnect, players) {
    const alertChannel = index.bot.channels.cache.find(channel => channel.id === Process.env.ALERT_CHANNEL);
    if (isConnect == 'connect') {
        players.forEach(player=>{
            const name = player.attributes.name;
            connectEmbed.setTitle(name);
            alertChannel.send({embeds: [connectEmbed]}).then(msg => {
                setTimeout(() => {
                    msg.delete();
                }, 60000);
            });
        })
    } else if (isConnect == 'disconnect') {
        players.forEach(player=> {
            const name = player.attributes.name;
            disconnectEmbed.setTitle(name);
            alertChannel.send({embeds: [disconnectEmbed]}).then(msg =>{
                setTimeout(() => {
                    msg.delete()
                }, 60000);
            });
        })
    }
}

module.exports = { sendAlert }
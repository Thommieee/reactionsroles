const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var channel1 = message.guild.channels.cache.get("746661088912867360")

    var channel2 = message.guild.channels.cache.get("746661126367870986")

    channel1.updateOverwrite(message.guild.roles.cache.find(x => x.name === "@everyone"), {

        VIEW_CHANNEL: true,
        SEND_MESSAGES: true,
        ATTACK_FILES: true,
        CONNECT: true,
        ADD_REACTIONS: true,
        READ_MESSAGE_HISTORY: true

    });

    channel2.updateOverwrite(message.guild.roles.cache.find(x => x.name === "@everyone"), {

        VIEW_CHANNEL: true,
        SEND_MESSAGES: true,
        ATTACK_FILES: true,
        CONNECT: true,
        ADD_REACTIONS: true,
        READ_MESSAGE_HISTORY: true

    });

}

module.exports.help = {
    name: "openNS",
    description: "Als je dit command gebruikt zegt de bot hallo terug",
    category: "Algemeen"
}

const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var channel1 = message.guild.channels.cache.get("746661088912867360")

    var channel2 = message.guild.channels.cache.get("746661126367870986")

    channel1.updateOverwrite(message.guild.roles.cache.find(x => x.name === "@everyone"), {

        VIEW_CHANNEL: false,
        SEND_MESSAGES: false,
        ATTACK_FILES: false,
        CONNECT: false,
        ADD_REACTIONS: false,
        READ_MESSAGE_HISTORY: false

    });

    channel2.updateOverwrite(message.guild.roles.cache.find(x => x.name === "@everyone"), {

        VIEW_CHANNEL: false,
        SEND_MESSAGES: false,
        ATTACK_FILES: false,
        CONNECT: false,
        ADD_REACTIONS: false,
        READ_MESSAGE_HISTORY: false

    });

}

module.exports.help = {
    name: "closeNS",
    description: "Als je dit command gebruikt zegt de bot hallo terug",
    category: "Algemeen"
}

const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const role =  message.guild.roles.cache.find("731837368281202688");

    var channel1 = message.guild.channels.cache.get("746661088912867360")

    var channel2 = message.guild.channels.cache.get("746661126367870986")

    channel1.overwritePermissions(role, { 'VIEW_CHANNEL': true })

    channel2.overwritePermissions(role, { 'VIEW_CHANNEL': true })

}

module.exports.help = {
    name: "openNS",
    description: "Als je dit command gebruikt zegt de bot hallo terug",
    category: "Algemeen"
}

const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    return message.channel.send("Hoi!");

}

module.exports.help = {
    name: "test",
    description: "Als je dit command gebruikt zegt de bot hallo terug",
    category: "Algemeen"
}
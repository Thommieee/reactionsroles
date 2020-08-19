const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
        .setTitle("Language Roles")
        .setDescription("React to get a language role \n If you react 1️⃣, you will get the dutch role \n If you react 2️⃣, you will get the french role \n If you react 3️⃣, you will get the german role")
        .setColor("#ff7300")
    var msgEmbed = await message.channel.send(embed)
    msgEmbed.react("1️⃣")
    msgEmbed.react("2️⃣")
    msgEmbed.react("3️⃣")

}

module.exports.help = {
    name: "reactions",
    description: "Als je dit command gebruikt zegt de bot hallo terug",
    category: "Algemeen"
}
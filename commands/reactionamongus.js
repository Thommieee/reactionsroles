const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
        .setTitle("Discord Sings role")
        .setDescription("React to get a game role \n If you react 🤡, you will get the Among Us role")
        .setColor("#ff7300")
    var msgEmbed = await message.channel.send(embed)
    msgEmbed.react("🤡")

}

module.exports.help = {
    name: "Among",
    description: "Als je dit command gebruikt zegt de bot hallo terug",
    category: "Algemeen"
}
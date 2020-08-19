const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var embed = new discord.MessageEmbed()
        .setTitle("Game Roles")
        .setDescription("React to get a game role \n If you react 🔣, you will get the Bus Sim 18 role \n If you react *️⃣, you will get the Dead by Daylight role \n If you react 0️⃣, you will get the Roblox role \n If you react 4️⃣, you will get the Train Sim role \n If you react 5️⃣, you will get the Cities Skylines role \n If you react 6️⃣, you will get the Minecraft role \n If you react 7️⃣, you will get the Call Of Duty role \n If you react 8️⃣, you will get the Omsi role \n If you react 9️⃣, you will get the Train sim world role \n If you react 🔟, you will get the VRChat role \n If you react 🔠, you will get the Tourist bus sim role \n If you react 🔢, you will get the ETS2 role")
        .setColor("#ff7300")
    var msgEmbed = await message.channel.send(embed)
    msgEmbed.react("🔣")
    msgEmbed.react("*️⃣")
    msgEmbed.react("0️⃣")
    msgEmbed.react("4️⃣")
    msgEmbed.react("5️⃣")
    msgEmbed.react("6️⃣")
    msgEmbed.react("7️⃣")
    msgEmbed.react("8️⃣")
    msgEmbed.react("9️⃣")
    msgEmbed.react("🔟")
    msgEmbed.react("🔠")
    msgEmbed.react("🔢")

}

module.exports.help = {
    name: "reactionsgame",
    description: "Als je dit command gebruikt zegt de bot hallo terug",
    category: "Algemeen"
}
const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const client = new discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
client.login(process.env.token);
client.commands = new discord.Collection();

fs.readdir("./commands", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    };

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);

    });

});

client.on("ready", async () => {

    console.log(`${client.user.username} is online.`);
    client.user.setActivity("if people are reacting to get a role", { type: "WATCHING" });

});

client.on("guildMemberAdd", member => {

    var role = member.guild.roles.cache.get("731837368281202688");

    if (!role) return;

    member.roles.add(role);

    var channel = member.guild.channels.cache.get("745567092434272327");

    var regels = member.guild.channels.cache.get("744841901332496404");

    var getroles = member.guild.channels.cache.get("745019339916312607");

    if (!channel) return;

    var joinEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Hi ${member}, **welcome in this server!!** \n  In ${regels} can you find the rules of this server. Then go to ${getroles} to get your roles. \n I hope you have lots of fun in this server!`)
        .setColor("#ff7300")
        .setFooter("Member joined")
        .setTimestamp();

    channel.send(joinEmbed);

});

client.on("guildMemberRemove", member => {

    var channel = member.guild.channels.cache.get("745567092434272327");

    if (!channel) return;

    var leaveEmbed = new discord.MessageEmbed()
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setDescription(`Sadly ${member} leaved`)
        .setColor("#ff7300")
        .setFooter("Member leaved")
        .setTimestamp();

    channel.send(leaveEmbed);

});

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") {
        console.log(message.content, message.author.username);
        return message.author.send("Waarom dm je mij? Het heeft toch geen nut!")
    };

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    if (!message.content.startsWith(prefix)) return;

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length)) || client.commands.get(command.slice(prefix.length));

    if (commands) commands.run(client, message, arguments);

});

client.on("messageReactionAdd", async (reaction, user) => {

    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "745019339916312607") {
        
        if (reaction.emoji.name === "1️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("745167688392769578")
        } else if (reaction.emoji.name === "2️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("745168765347430430")
        } else if (reaction.emoji.name === "3️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("745168812441075722")
        } else if (reaction.emoji.name === "🔣") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("745012211096748162")
        } else if (reaction.emoji.name === "*️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("745012321637761025")
        } else if (reaction.emoji.name === "0️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("745012417645379594")
        } else if (reaction.emoji.name === "4️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("745013264718757975")
        } else if (reaction.emoji.name === "5️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("745015110497730740")
        } else if (reaction.emoji.name === "6️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("745015162179813448")
        } else if (reaction.emoji.name === "7️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("745015192609488917")
        } else if (reaction.emoji.name === "8️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("745015460868915342")
        } else if (reaction.emoji.name === "9️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("745165949094723585")
        } else if (reaction.emoji.name === "🔟") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("745167921143087176")
        } else if (reaction.emoji.name === "🔠") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("745170968934351019")
        } else if (reaction.emoji.name === "🔢") {
            await reaction.message.guild.members.cache.get(user.id).roles.add("745170874382024706")
        }
        
    }

});

client.on("messageReactionRemove", async (reaction, user) => {

    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();

    if (user.bot) return;
    if (!reaction.message.guild) return;

    if (reaction.message.channel.id === "745019339916312607") {
        
        if (reaction.emoji.name === "1️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("745167688392769578")
        } else if (reaction.emoji.name === "2️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("745168765347430430")
        } else if (reaction.emoji.name === "3️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("745168812441075722")
        } else if (reaction.emoji.name === "🔣") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("745012211096748162")
        } else if (reaction.emoji.name === "*️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("745012321637761025")
        } else if (reaction.emoji.name === "0️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("745012417645379594")
        } else if (reaction.emoji.name === "4️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("745013264718757975")
        } else if (reaction.emoji.name === "5️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("745015110497730740")
        } else if (reaction.emoji.name === "6️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("745015162179813448")
        } else if (reaction.emoji.name === "7️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("745015192609488917")
        } else if (reaction.emoji.name === "8️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("745015460868915342")
        } else if (reaction.emoji.name === "9️⃣") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("745165949094723585")
        } else if (reaction.emoji.name === "🔟") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("745167921143087176")
        } else if (reaction.emoji.name === "🔠") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("745170968934351019")
        } else if (reaction.emoji.name === "🔢") {
            await reaction.message.guild.members.cache.get(user.id).roles.remove("745170874382024706")
        }
        
    }

});
const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require("discord.js")


module.exports = class ClearCommand extends BaseCommand {
  constructor() {
    super('clear', 'mod', ['purge', 'prune', 'delete'], 'clear [number]');
  }

  run(client, message, args) {

    //Variables

    var boticon = client.user.displayAvatarURL();

    //Permission
    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("Nemáš právo používat tento příkaz!");

    //Args
    if(!args[0]) return message.reply('❓ Zapoměl jsi mi říct kolik správ mám vymazat!');
    message.channel.bulkDelete(args[0]).then(msg => {
      msg.delete({ timeout: 4000 })
      })

    //Embed message
    const embedClear = new MessageEmbed()

    .setAuthor("⚡Spark Protect")
    .setTitle("Clear channel")
    .setColor("#ff0000")
    .setThumbnail(boticon)
    .setDescription("Právě jsi **VYMAZAL** historii : " + args[0] + " zpráv(y)")
    .setFooter(`©NiDEV-Tech ${message.guild.me.displayName}`, client.user.displayAvatarURL())

    message.channel.send(embedClear).then(msg => {
      msg.delete({ timeout: 4000 })
      })
    
  }
}
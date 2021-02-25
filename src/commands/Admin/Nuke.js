const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require("discord.js")

module.exports = class LockCommand extends BaseCommand {
  constructor() {
    super('nuke', 'Admin', []);
  }

  run(client, message, args) {

    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.reply("You do not have the perms to use this cmd!")
  }

  var boticon = client.user.displayAvatarURL();
  let embed = new MessageEmbed()
          .setColor("#f5cc16")
          .setTitle("Nuke channel")
          .setThumbnail(boticon)
          .setAuthor("⚡Spark Protect")
          .setDescription("Tento channel bude celý vymazán, včetně celé historie. Bude nahrazen zcela novým a na stejném místě. Channel bude vymazán za 10 vteřin!")
          .setFooter(`©NiDEV-Tech ${message.guild.me.displayName}`, client.user.displayAvatarURL())

        message.channel.send(embed);

  setTimeout(function(){
    message.channel.clone()
    message.channel.delete()
  }, 10000);
}
}
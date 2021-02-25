const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require("discord.js")

module.exports = class SwearWordCommand extends BaseCommand {
  constructor() {
    super('swear_word', 'User', []);
  }

  run(client, message, args) {
    
    var boticon = client.user.displayAvatarURL();

    let inviteEmbed = new MessageEmbed()
        
        .setTitle("Sprostá slova")
        .setAuthor("⚡Spark Protect")
        .setColor("#ff0000")
        .setThumbnail(boticon)
        .setDescription("Zde je list sprostých slov, které náš bot detekuje: \n - idiot \n - dement \n - kokot \n - kripl \n - kurva \n - piča")
        .setFooter(`©NiDEV-Tech ${message.guild.me.displayName}`, client.user.displayAvatarURL())

        message.channel.send(inviteEmbed);

  }
}
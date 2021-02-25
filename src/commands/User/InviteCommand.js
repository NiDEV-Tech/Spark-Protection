const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require("discord.js")

module.exports = class InviteCommand extends BaseCommand {
  constructor() {
    super('invite', 'User', []);
  }

  run(client, message, args) {
    
    var boticon = client.user.displayAvatarURL();

    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("Nemáš právo používat tento příkaz!");

    let inviteEmbed = new MessageEmbed()
        
        .setTitle("Přidej si mě na server")
        .setURL("https://discord.com/oauth2/authorize?client_id=813036260452073503&scope=bot&permissions=67357761")
        .setAuthor("⚡Spark Protect")
        .setColor("#ff0000")
        .setThumbnail(boticon)
        .setDescription("Pokud máš zájem tak si můžeš bota přidat na server přímo skrze tento invite link. Neboj se nic, ochráním tě od každé špatnosti.")
        .addField("📝 Invite link", "[Invite link](https://discord.com/oauth2/authorize?client_id=813036260452073503&scope=bot&permissions=67357761)", false)
        .setFooter(`©NiDEV-Tech ${message.guild.me.displayName}`, client.user.displayAvatarURL())

        message.channel.send(inviteEmbed);

  }
}
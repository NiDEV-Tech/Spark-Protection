const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require("discord.js")

module.exports = class UserinfoCommand extends BaseCommand {
  constructor() {
    super('userinfo', 'misc', ['user', 'info'], 'userinfo [user] | !userinfo');
  }

  run(client, message, args) {
    
    
    if(!args[0]) return message.channel.send('❓ Musíš mi říct, o kom ti mám zjistit informace!');

    
    if(args[0]){
      
      let member = message.mentions.members.first();
      
      if(member) {
        let embed = new MessageEmbed()
          .setColor("#f5cc16")
          .setTitle("Uživatelské informace")
          .setThumbnail(member.user.displayAvatarURL())
          .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
          .setDescription("Kompletní uživatelské informace.")
          .addField("⚗ **Discord tag**", `${member.user.tag}`, false)
          .addField("🔒 **ID user**", `${member.user.id}`, false)
          .addField("🧪 **Datum připojení**", `${member.joinedAt.toLocaleString()}`, false)
          .addField("📨 **Stáří účtu**", `${member.user.createdAt.toLocaleString()}`, false)
          .setFooter(`© NiDEV-Tech ${message.guild.me.displayName}`, client.user.displayAvatarURL());

        message.channel.send(embed);
      }  
    }
  }
}
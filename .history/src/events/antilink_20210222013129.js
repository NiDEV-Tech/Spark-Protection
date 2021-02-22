const BaseEvent = require('../utils/structures/BaseEvent');
const { MessageEmbed } = require('discord.js');
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    
    let inviteLink = ["discord.gg/", "discord.com/invite", "discordapp.com/invite", ];
    var boticon = client.user.displayAvatarURL();
    let channel = client.channels.cache.get('780095678239080528');

    if (inviteLink.some(word => message.content.toLowerCase().includes(word))) {
      //Channel alert
      var memberIcon = message.author.avatarURL();
      const embed = new MessageEmbed()
          .setTitle('BeSave alert')
          .setAuthor(message.author.username, memberIcon)
          .setDescription("Někdo se pokusil poslat na server Discord invite link! \n V případě že chceš dohledat majitele tak použij [ID Finder](https://discord.id/)")
          .setColor("#fc5858")
          .setThumbnail(boticon)
          .addField("📝 Jméno serveru", message.guild.name, false)
          .addField("⭐ Majitel serveru", `${(message.guild.ownerID)}`, false)
          .addField("🤬 Uživatel", message.author.username , false)
          .addField("📢 Obsah", message.content)
          .setTimestamp()
          .setFooter(`©Playinright.cz ${message.guild.me.displayName}`, client.user.displayAvatarURL());
  
      message.channel.send(embed);
      //Discord link delete + DM alert
      message.delete();
      var memberIcon = message.author.avatarURL();
      const embed1 = new MessageEmbed()
          .setTitle('BeSave alert')
          .setAuthor(message.author.username, memberIcon)
          .setDescription('Na serveru je zakázáno posílat Discord invite na jiné servery bez povolení místního administrátora! Doporučujeme přečíst si místní pravidla! \n\n **Majitel serveru byl informován!**')
          .setColor("#fc5858")
          .setThumbnail(boticon)
          .addField("📝 Jméno serveru", message.guild.name, false)
          .addField("📢 Obsah", message.content)
          .setTimestamp()
          .setFooter(`©Playinright.cz ${message.guild.me.displayName}`, client.user.displayAvatarURL());
  
      message.author.send(embed1);
      console.log("Discord link byl vymazán! Jméno: " + (message.author.username) +" │ Server: " + message.guild.name)
    }

  }
}
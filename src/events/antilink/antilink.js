const { MessageEmbed, Channel } = require('discord.js');
const BaseEvent = require('../../utils/structures/BaseEvent');
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    
    //Blacklist word
    let inviteLink = ["discord.gg/", "discord.com/invite", "discordapp.com/invite", ];
  
    if (inviteLink.some(word => message.content.toLowerCase().includes(word))) {
      
      //Delete message

      message.delete(inviteLink);
      
      //Embed message

      var boticon = client.user.displayAvatarURL();

      const embedAntilink = new MessageEmbed()

          .setAuthor("⚡Spark Protect")
          .setTitle("Antilink Protect")
          .setColor("#ff0000")
          .setThumbnail(boticon)
          .setDescription("Zde není povoleno posílat **Discord linky** na jiné servery!\n Doporučujeme si přečíst naše **pravidla**!")
          .setFooter(`©NiDEV-Tech ${message.guild.me.displayName}`, client.user.displayAvatarURL());
          
      message.channel.send(embedAntilink);    
    }
  }
}
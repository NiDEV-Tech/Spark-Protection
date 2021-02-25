const { MessageEmbed, Channel } = require('discord.js');
const BaseEvent = require('../../utils/structures/BaseEvent');
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    
    //Define log channel

    let channel = client.channels.cache.get('814193031233142814');

    //Antilink filtr
    let inviteLink = ["discord.gg/", "discord.com/invite", "discordapp.com/invite", ];
  
    if (message.author.bot) return; 
    if (inviteLink.some(word => message.content.toLowerCase().includes(word))) {
      
      var boticon = client.user.displayAvatarURL();

      const embedLink = new MessageEmbed()

          .setAuthor("⚡Spark Protect")
          .setTitle("Link Protect")
          .setColor("#ff0000")
          .setThumbnail(boticon)
          .setDescription("Někdo poslal do chatu Discord invite \n Bylo by dobré jít zkontrolovat tuto aktivitu.")
          .addField("📝 Jméno serveru", message.guild.name, false)
          .addField("🤬 Uživatel", message.author.username , false)
          .addField("📢 Obsah", message.content)
          .setFooter(`©NiDEV-Tech ${message.guild.me.displayName}`, client.user.displayAvatarURL());
          
      channel.send(embedLink);

      //Delete message

      message.delete(inviteLink);

      //Console
      console.log("'" + message.author.username + "' poslal link na discord '" + message.content + "'")
      
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
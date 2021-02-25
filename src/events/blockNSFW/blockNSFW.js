  //Costance
  const { MessageEmbed, Channel } = require('discord.js');
  const BaseEvent = require('../../utils/structures/BaseEvent');
  module.exports = class MessageDeleteEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

    //Variables
    var boticon = client.user.displayAvatarURL();

    //Import list
    const nsfw = require("./nsfwList.json");

    if (nsfw.some(word => message.content.toLowerCase().includes(word))) {
        
      if (message.author.bot) return; 
      
      //Find channel
      let channel = client.channels.cache.get('814193031233142814');
      
      //Embed message
      const embedNsfw = new MessageEmbed()

          .setAuthor("⚡Spark Protect")
          .setTitle("NSFW Protect")
          .setColor("#ff0000")
          .setThumbnail(boticon)
          .setDescription("Někdo poslal do chatu NSFW Obsah \n Bylo by dobré jít zkontrolovat tuto aktivitu.")
          .addField("📝 Jméno serveru", message.guild.name, false)
          .addField("🤬 Uživatel", message.author.username , false)
          .addField("📢 Obsah", message.content)
          .setFooter(`©NiDEV-Tech ${message.guild.me.displayName}`, client.user.displayAvatarURL());
          
      channel.send(embedNsfw);

      //NSFW Delete
      message.delete(nsfw);

      //Console log
      console.log("'" + message.author.username + "' poslal odkaz na p***o '" + message.content + "'")

      //Embed channel message
      const embedNsfwChannel = new MessageEmbed()

        .setAuthor("⚡Spark Protect")
        .setTitle("NSFW Protect")
        .setColor("#ff0000")
        .setThumbnail(boticon)
        .setDescription("Opravdu bych ti doporučil si nejdřív přečíst pravidla serveru! \n Není zde povoleno posílat NSFW obsah! Administrátor byl kontaktován! ")
        .setFooter(`©NiDEV-Tech ${message.guild.me.displayName}`, client.user.displayAvatarURL());

        message.channel.send(embedNsfwChannel).then(msg => {
          msg.delete({ timeout: 8000 })
          })

      //NSFW Embed user message     
      const embedNsfwUser = new MessageEmbed()

        .setAuthor("⚡Spark Protect")
        .setTitle("NSFW Protect")
        .setColor("#ff0000")
        .setThumbnail(boticon)
        .setDescription("Pozor na to co posíláš do chatu. NSFW obsah je přísně zakázán! \n Doporučuji ti přečíst si pravidla serveru. \n\n Kontaktoval jsem majitele serveru!")
        .setFooter(`©NiDEV-Tech ${message.guild.me.displayName}`, client.user.displayAvatarURL())
    
         message.author.send(embedNsfwUser);    

    }
  }
}
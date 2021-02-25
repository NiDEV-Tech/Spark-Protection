const { MessageEmbed, Channel } = require('discord.js');
const BaseEvent = require('../../utils/structures/BaseEvent');
module.exports = class MessageDeleteEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

    //Import filter
    const swear = require("./swearList.json");

    if (message.author.bot) return; 
    if (swear.some(word => message.content.toLowerCase().includes(word))) {
     
      //Find channel
      //Premium function !!
      let channel = client.channels.cache.get('814193031233142814');

      //Embed message

      var boticon = client.user.displayAvatarURL();

      const embedSwear = new MessageEmbed()

          .setAuthor("⚡Spark Protect")
          .setTitle("Swear Protect")
          .setColor("#ff0000")
          .setThumbnail(boticon)
          .setDescription("Někdo použil slovo, které je na serveru zakázané! \n Bylo by dobré jít zkontrolovat tuto aktivitu.")
          .addField("📝 Jméno serveru", message.guild.name, false)
          .addField("🤬 Uživatel", message.author.username , false)
          .addField("📢 Obsah", message.content)
          .setFooter(`©NiDEV-Tech ${message.guild.me.displayName}`, client.user.displayAvatarURL())
          
      channel.send(embedSwear);

      //Console log
      console.log("'" + message.author.username + "' poslal nevhodnou zprávu '" + message.content + "'")

      //Delete swear
      message.delete(swear);

      const embedBlackListedWord = new MessageEmbed()

        .setAuthor("⚡Spark Protect")
        .setTitle("Swear Protect")
        .setColor("#ff0000")
        .setThumbnail(boticon)
        .setDescription("Pozor na zakázané slova. Prosím přečti si naše pravidla \n nebo použij příkaz pro vypsání zakázaných slov. \n\n Příkaz : `sp!swear_word`")
        .setFooter(`©NiDEV-Tech ${message.guild.me.displayName}`, client.user.displayAvatarURL())

        message.channel.send(embedBlackListedWord).then(msg => {
          msg.delete({ timeout: 8000 })
          })

      //User swear words

      const embedSwearUser = new MessageEmbed()

      .setAuthor("⚡Spark Protect")
      .setTitle("Swear Protect")
      .setColor("#ff0000")
      .setThumbnail(boticon)
      .setDescription("Pozor na slova, které jsou na serveru zakázána. \n Doporučuji ti přečíst si pravidla serveru. \n\n  Kompletní blacklist najdeš [ZDE](https://www.playinright.cz/) ")
      .setFooter(`©NiDEV-Tech ${message.guild.me.displayName}`, client.user.displayAvatarURL())

      message.author.send(embedSwearUser);  

    }
  }
}
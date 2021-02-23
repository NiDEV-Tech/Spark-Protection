const { MessageEmbed, Channel } = require('discord.js');
const BaseEvent = require('../../utils/structures/BaseEvent');
module.exports = class MessageDeleteEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

    let swear = ["tydix","idiot","dement","kokot","kripl","kurva","piča"];

    if (swear.some(word => message.content.toLowerCase().includes(word))) {

      message.delete(swear);

      //Embed message

      var boticon = client.user.displayAvatarURL();

      const embedSwear = new MessageEmbed()

          .setAuthor("⚡Spark Protect")
          .setTitle("Swear Protect")
          .setColor("#ff0000")
          .setThumbnail(boticon)
          .setDescription("Použil jsi bouhžel slovo, které je na serverovém **blacklistu**!\n Doporučujeme si přečíst naše **pravidla**!")
          .setFooter(`©NiDEV-Tech ${message.guild.me.displayName}`, client.user.displayAvatarURL())
          .addField("Blacklist příkaz", "`sp!black_words`", false);
          
      message.channel.send(embedSwear);
    }
  }
}
const { MessageEmbed, Channel } = require('discord.js');
const BaseEvent = require('../../utils/structures/BaseEvent');
module.exports = class MessageDeleteEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

    let nsfw = ["pornuj.cz","cz.pornhub.com","pornhub.com","redtube.com","youporn.com","xvideos.com","xhamster.com","xnxx.com","hclips.com","porn.com","tnaflix.com","tube8.com","spankbang.com","drtuber.com","spankwire.com","keezmovies.com","nuvid.com","ixxx.com","sunporno.com","pornhd.com","porn300.com","pornone.com","www.sexvid.xxx","thumbzilla.com","zbporn.com","fuq.com","xxxbunker.com","3movs.com","cumlouder.com","porndoe.com","xbabe.com","porndroids.com","alohatube.com","maturetube.com","tubev.sex","www.4tube.com","bestfreetube.xxx","shameless.com","megatube.xxx","porntube.com","porndig.com","pornburst.xxx","fapster.xxx","bobs-tube.com","redporn.xxx","pornrox.com","pornmaki.com","pornid.xxx","slutload.com","proporn.com","pornhost.com","xxxvideos247.com","handjobhub.com","dansmovies.com","www.porn7.xxx","forhertube.com","katestube.com","maxiporn.com","pornheed.com","orgasm.com","pornrabbit.com","tiava.com","fux.com","h2porn.com","metaporn.com","here.xxx","pornerbros.com"];

    if (nsfw.some(word => message.content.toLowerCase().includes(word))) {
        
      if (message.author.bot) return; 
      
      //Find channel
      //Premium function !!
      let channel = client.channels.cache.get('814193031233142814');

      //Console log
      console.log("'" + message.author.username + "' poslal odkaz na p***o '" + message.content + "'")

      //Embed message

      var boticon = client.user.displayAvatarURL();

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

    //NSFW Embed user      
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
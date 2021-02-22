// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageDelete
const BaseEvent = require('../../utils/structures/BaseEvent');
module.exports = class MessageDeleteEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

    let nsfw = ["pornuj.cz","cz.pornhub.com","pornhub.com","redtube.com","youporn.com","xvideos.com","xhamster.com","xnxx.com","hclips.com","porn.com","tnaflix.com","tube8.com","spankbang.com","drtuber.com","spankwire.com","keezmovies.com","nuvid.com","ixxx.com","sunporno.com","pornhd.com","porn300.com","pornone.com","www.sexvid.xxx","thumbzilla.com","zbporn.com","fuq.com","xxxbunker.com","3movs.com","cumlouder.com","porndoe.com","xbabe.com","porndroids.com","alohatube.com","maturetube.com","tubev.sex","www.4tube.com","bestfreetube.xxx","shameless.com","megatube.xxx","porntube.com","porndig.com","pornburst.xxx","fapster.xxx","bobs-tube.com","redporn.xxx","pornrox.com","pornmaki.com","pornid.xxx","slutload.com","proporn.com","pornhost.com","xxxvideos247.com","handjobhub.com","dansmovies.com","www.porn7.xxx","forhertube.com","katestube.com","maxiporn.com","pornheed.com","orgasm.com","pornrabbit.com","tiava.com","fux.com","h2porn.com","metaporn.com","here.xxx","pornerbros.com"];

    if (nsfw.some(word => message.content.toLowerCase().includes(word))) {

      message.delete(nsfw);

      message.channel.send("🔞 Toto není NSFW");

    }
  }
}
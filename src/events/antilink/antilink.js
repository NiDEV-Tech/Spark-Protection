// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageDelete
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
      message.channel.send("🔐 Pozvánka byla vymazána!");
      //Console log
      //Next code ?
    }

  }
}
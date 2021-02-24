// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-message
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    
    const blacklist = ['noreply', 'dnr']; // These are case sensitive
      if (message.author.bot) {             // and may contain spaces

      // Otherwise anyone could start their message with "noreply" and be ignored
      if (blacklist.some(phrase => message.content.startsWith(phrase))) return;
      // .... continue with rest of code
    }

  }
}
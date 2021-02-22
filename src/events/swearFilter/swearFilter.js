// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-messageDelete
const BaseEvent = require('../../utils/structures/BaseEvent');
module.exports = class MessageDeleteEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {

    let swear = ["tydix","idiot","dement","kokot","kripl","kurva","piča"];

    if (swear.some(word => message.content.toLowerCase().includes(word))) {

      message.delete(swear);

      message.channel.send("🙄 Proč nadáváš?");
    }
  }
}
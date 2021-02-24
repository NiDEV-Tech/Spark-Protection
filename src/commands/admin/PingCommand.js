const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'misc', ['lag', 'latency'], 'ping');
  }

  run(client, message, args) {
    //send a message to the channel
    message.channel.send("Měřím ping...").then(m => {
      let ping = m.createdTimestamp - message.createdTimestamp; //calculate the ping of the bot

      //edit the message to the bot's ping and the ping to the API
      m.edit(`🔋 Latence: \`${ping}\`\n📡 API latence: \`${Math.round(client.ws.ping)}\``);
    });
  }
}
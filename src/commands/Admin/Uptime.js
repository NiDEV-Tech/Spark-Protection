const BaseCommand = require('../../utils/structures/BaseCommand');
const ms = require('ms');

module.exports = class UptimeCommand extends BaseCommand {
  constructor() {
    super('uptime', 'misc', [], 'uptime');
  }

  run(client, message, args) {
    message.channel.send(`🧡Jsem online po dobu: \`${ms(client.uptime, { long: true })}\``);
  }
}
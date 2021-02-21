const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UptimeCommand extends BaseCommand {
  constructor() {
    super('uptime', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('uptime command works');
  }
}
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ClearCommand extends BaseCommand {
  constructor() {
    super('clear', 'admin', []);
  }

  run(client, message, args) {
    message.channel.send('clear command works');
  }
}
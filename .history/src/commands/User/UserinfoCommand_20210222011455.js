const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UserinfoCommand extends BaseCommand {
  constructor() {
    super('userinfo', 'User', []);
  }

  run(client, message, args) {
    message.channel.send('userinfo command works');
  }
}
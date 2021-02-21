const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require("discord.js")

module.exports = class InviteCommand extends BaseCommand {
  constructor() {
    super('invite', 'invite', []);
  }

  run(client, message, args) {
    
    return message.member
      .send(
        `https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=70282305&scope=bot `
      )
    
      //Chyba permission asi
  }
}
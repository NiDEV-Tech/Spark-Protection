const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ClearCommand extends BaseCommand {
  constructor() {
    super('clear', 'mod', ['purge', 'prune', 'delete'], 'clear [number]');
  }

  run(client, message, args) {
    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("Nemáš právo používat tento příkaz!");
    
    if(!args[0]) return message.reply('❓ Zapoměl jsi mi říct kolik správ mám vymazat!');
    message.channel.bulkDelete(args[0]);

    message.channel.send("🧽 Vymazal jsem " + (args[0])+ " zpráv")

    //Dopsat funkci pro vymazání závěrečné správy o vymazání správ 
  }
}
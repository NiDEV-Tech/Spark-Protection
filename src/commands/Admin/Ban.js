const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require("discord.js")
module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'Admin', []);
  }

  run(client, message, args) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You dont have enough perms to use this cmd!")
        let target = message.mentions.members.first()

        if(!target) return message.reply("Please mention someone to ban!")

        if(target.id === message.author.id) {
            return message.reply("You cannot kick yourself!")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("Please give a reason!")

        let embed = new MessageEmbed()
        .setTitle("Member Banned")
        .addField("Target", target.user.tag)
        .addField("moderator", message.author.tag)
        .addField("Reason", `${reason}`)
        message.channel.send(embed)
        target.ban({reason:reason})
  }
}
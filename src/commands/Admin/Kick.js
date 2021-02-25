const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed } = require("discord.js")
module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'Admin', []);
  }

  run(client, message, args) {

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You dont have enough perms to use this cmd!")
        let target = message.mentions.members.first()

        if(!target) return message.reply("Please mention someone to kick!")

        if(target.id === message.author.id) {
            return message.reply("You cannot kick yourself!")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("Please give a reason!")

        let embed = new MessageEmbed()
        .setTitle("Member kicked")
        .addField("Target", target.user.tag)
        .addField("Moderator", message.author.tag)
        .addField("Reason", `${reason}`)
        message.channel.send(embed)
        target.kick(reason)

  }
}
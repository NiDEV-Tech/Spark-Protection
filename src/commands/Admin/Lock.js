const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Channel } = require('discord.js');
module.exports = class LockCommand extends BaseCommand {
  constructor() {
    super('lock', 'Admin', []);
  }

  run(client, message, args) {

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("You do not have enough perms to use this cmd!")
    const channel = message.mentions.channels.first()
    if(!channel) return message.reply("Please mention a valid channel!")
    const roletofind = args.slice(1).join(" ")
    const role = message.guild.roles.cache.find(r => r.id === roletofind)
    if(!role) return message.reply("Please give a valid role id!")
    let embed = new MessageEmbed()
    .setTitle("channel locked!")
    .setDescription(`This channel has been locked by ${message.author.tag}`)
    .setTimestamp()
    channel.updateOverwrite(role, {
        SEND_MESSAGES: false
    })
    message.channel.send(embed)

  }
}
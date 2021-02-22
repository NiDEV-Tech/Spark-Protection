const BaseEvent = require('../utils/structures/BaseEvent');
const { MessageEmbed } = require('discord.js');
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    
    //Blacklist word
    let inviteLink = ["discord.gg/", "discord.com/invite", "discordapp.com/invite", ];
  
    if (inviteLink.some(word => message.content.toLowerCase().includes(word))) {
      
      //Delete message
      message.delete(inviteLink)
      message.channel.send(message.author.username + "Discord link byl vymazán!")
      //Console log
      console.log("Discord link byl vymazán! Jméno: " + (message.author.username) +" │ Server: " + message.guild.name)
    }

  }
}
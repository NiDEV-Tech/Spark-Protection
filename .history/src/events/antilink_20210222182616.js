const BaseEvent = require('../utils/structures/BaseEvent');
const { MessageEmbed } = require('discord.js');
module.exports = class MessageEvent extends BaseEvent {
  constructor() {
    super('message');
  }
  
  async run(client, message) {
    
    let inviteLink = ["discord.gg/", "discord.com/invite", "discordapp.com/invite", ];
    var boticon = client.user.displayAvatarURL();
    let channel = client.channels.cache.get('780095678239080528');

    if (inviteLink.some(word => message.content.toLowerCase().includes(word))) {
      
      message.delete(inviteLink)
      
      console.log("Discord link byl vymazán! Jméno: " + (message.author.username) +" │ Server: " + message.guild.name)
    }

  }
}
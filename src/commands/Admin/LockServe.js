//Constats
const BaseCommand = require('../../utils/structures/BaseCommand');
const { MessageEmbed, Channel } = require('discord.js');
//Modul
module.exports = class LockCommand extends BaseCommand {
  constructor() {
    super('lockserver', 'Admin', []);
  }

  run(client, message, args) {
    
    
    const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
    
        if (args[0] === 'on') {

            //Raid function
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                })
            })
            
            //Embed support log
            let channel = client.channels.cache.get('814193031233142814');
            var boticon = client.user.displayAvatarURL();

            const raidAlert = new MessageEmbed()

                .setAuthor("⚡Spark Protect")
                .setTitle("RAID Protect")
                .setColor("#ff0000")
                .setThumbnail(boticon)
                .setDescription("Někdo rozjel raid na serveru. \n Všechny channels byly zablokovány pro psaní!")
                .addField("📝 Jméno serveru", message.guild.name, false)
                .setFooter(`©NiDEV-Tech ${message.guild.me.displayName}`, client.user.displayAvatarURL());

            // Embed send    
            channel.send(raidAlert);
            
        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                })
            })
           

            return message.channel.send('unlocked all channels')
        }
    }
}

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot online')
})

client.on('message', message => {
  if (message.content.includes("r!rng")) {
    const args = message.content.replace('r!rng', '')
    if (!args) {
      message.channel.send('What do you want as the highest possible number?')
      return
    }
    if (isNaN(args)) {
      message.channel.send('Please provide a valid number.')
      return
    }
    
    const answ = args - 1
    
    message.channel.send(`${1 + Math.floor(Math.random() * answ)}`)
  }
})

client.on('message', message => {
  if (message.content === 'r!help') {
    const embed = new Discord.MessageEmbed()
    .setAuthor('RNG Bot - Help')
    .setDescription('Hello! To get a random number, use r!random <max>')
    message.channel.send(embed)
  }
})

client.login(process.env.TOKEN)
// Imports
const Discord = require('discord.js');
const bot = new Discord.Client();
const http = require('http');
// Vars
const token = process.env.DISCORDAPI;
var prefix = process.env.PREFIX;

bot.on('ready', () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity('Hugz');
});
bot.on('message', message => {
  if (message.author.bot) return;
  let messageArray = message.content.split(' ');
  let args = messageArray.slice(1);
  let cmd = messageArray[0];
  let dUser = message.mentions.users.first();
  // Hugs
  if (cmd === `${prefix}hug`) {
    if (args[0]) {
      message.channel.send(`${message.author.username} **gives** ${dUser.username} **a big wing hug!**`);
    } else {
      message.channel.send('Please mention a user!');
    }
  }
});
bot.login(token);

// Heroku shutdown workaround
const server = http.createServer();
server.listen(process.env.PORT || 5000);

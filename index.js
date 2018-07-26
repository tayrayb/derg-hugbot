// Imports
const Discord = require('discord.js');
const bot = new Discord.Client();
const express = require('express');
const app = express();
// Vars
const token = process.env.DISCORD_KEY;
var prefix = process.env.PREFIX;

console.log(prefix);
console.log(token);
console.log(process.env.PORT);

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
app.get('/', (req, res) => {
  return res.send('Hug Bot');
});
app.listen(process.env.PORT, () => {
  console.log('Now listening!');
});
// Bot to ping itself to preven sleeping
setInterval(function () {
  app.get('http://hug-bot.herokuapp.com');
  console.log('Pinged website!');
}, 300000);

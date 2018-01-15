const discord = require('discord.js');
const bot = new discord.Client();
const prefix = "!";
const maxrank = 20;
const groupId = 3152407;
const roblox = require('roblox-js');
bot.login(process.env.tok);
roblox.login({username: "FreakingHulk", password: process.env.password}).then((success) => {
  console.log(`Successfully Logged in with Username FreakingHulk, and password ${process.env.password}`)
}).catch(() => {console.log("Failed to login.");});

bot.on("ready", () => {
  bot.user.setActivity(`for !help | ${bot.guilds.array().length}`, { type: "LISTENING"})
  console.log("ROBLOXRanker ready!")
})

bot.on('message', (message) => require('./events/message.js')(bot, message))
roblox.onFriendRequest((id) => require('./events/friendrequest.js')(id, bot))
roblox.onShout((message) => require('./events/shout.js')(bot, message))
		       

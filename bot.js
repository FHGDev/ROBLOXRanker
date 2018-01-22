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
  bot.user.setActivity(`for !help | ${bot.guilds.array().length}`, {type: "WATCHING"})
  console.log("ROBLOXRanker ready!")
})

bot.on("message", message => {
	let args = message.content.split(/[]+/).slice(0)
	let r = args[1]
	let username = args[0]
	
	if (message.content == prefix + "promote") {
		if (username) {
		message.channel.send(`Checking ROBLOX for ${username}`)
		roblox.getIdFromUsername(username)
			.then(function (id) {
				roblox.getRankInGroup(groupId, id)
				.then(function (rank) {
					if (maximumrank <= rank) {
						message.channel.send(`${username} is rank ${rank} and not promotable.`)
					} else {
						message.channel.send(`${username} is rank ${rank} and is promotable.`)
						roblox.setRank(username, groupId, r)
						.then(message.channel.send(`Successfully set ${username}s rank to ${rank} in group ${groupId}`))
					}
				})
			})
		}
	}
})

const discord = require('discord.js');
const bot = new discord.Client();
const prefix = "!";
const maxrank = 20;
const groupId = 3152407;
const roblox = require('roblox-js');
bot.login(process.env.token);
roblox.login({username: "FreakingHulk", password: process.env.password}).then((success) => {
  console.log(`Successfully Logged in with Username FreakingHulk, and password ${process.env.password}`)
}).catch(() => {console.log("Failed to login.");});

function isCommand(command, message) {
	var command = command.toLowerCase();
	var content = message.content.toLowerCase();
	return content.startsWith(prefix + command);
}

bot.on("ready", () => {
  bot.user.setActivity(`up users in ${bot.guilds.array().length}` { type: "RANKING"})
})

bot.on('message', (message) => {
	if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.split(/[ ]+/)
    
    if(isCommand('Promote', message)){
    	var username = args[1]
    	if (username){
    		message.channel.send(`Checking ROBLOX for ${username}`)
    		roblox.getIdFromUsername(username)
			.then(function(id){
				roblox.getRankInGroup(groupId, id)
				.then(function(rank){
					if(maximumRank <= rank){
						message.channel.send(`${id} is rank ${rank} and not promotable.`)
					} else {
						message.channel.send(`${id} is rank ${rank} and promotable.`)
						roblox.promote(groupId, id)
						.then(function(roles){
							message.channel.send(`Promoted from ${roles.oldRole.Name} to ${roles.newRole.Name}`)
						}).catch(function(err){
							message.channel.send("Failed to promote.")
						});
					}
				}).catch(function(err){
					message.channel.send("Couldn't get him in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("Please enter a username.")
    	}
    	return;
    }


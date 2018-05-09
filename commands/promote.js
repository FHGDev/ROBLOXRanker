module.exports.run = (bot, message, args, discord, roblox) => {
  const groupId = 3152407
  const maximumrank = 240
  var username = args.join(" ")
    	if (username){
    		message.channel.send(`Checking ROBLOX for ${username}`)
    		roblox.getIdFromUsername(username)
			.then(id => {
				roblox.getRankInGroup(groupId, id)
				.then(rank => {
					if(maximumRank <= rank){
						message.channel.send(`${id} is rank ${rank} and not promotable.`)
					} else {
						message.channel.send(`${id} is rank ${rank} and promotable.`)
						roblox.promote(groupId, id)
						.then(roles => {
							message.channel.send(`Promoted from ${roles.oldRole.Name} to ${roles.newRole.Name}`)
						}).catch(err => {
							message.channel.send("Failed to promote.")
						});
					}
				}).catch(err => {
					message.channel.send("Couldn't get them in the group.")
				});
			}).catch(function(err){ 
				message.channel.send(`Sorry, but ${username} doesn't exist on ROBLOX.`)
			});
    	} else {
    		message.channel.send("Please enter a username.")
    	}
    	return;
}

module.exports.help = {
  name: "promote"
}

const discord = require('discord.js');
const bot = new discord.Client();
const prefix = "!";
const maxrank = "210";
const groupId = "3152407";
const roblox = require('roblox-js');
bot.login(process.env.token);

bot.commands = new discord.Collection()

require('fs').readdir("./commands/", (err, files) => {
	console.log("Loading Commands...");
	if (err) return console.error;
	files.filter(f => f.split(".").pop() == "js").forEach((f, i) => {
		bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
	})
});

roblox.login({username: "FreakingHulk", password: process.env.password}).then((success) => {
  console.log(`Successfully Logged in with Username FreakingHulk, and password ${process.env.password}`)
}).catch(() => console.log("Failed to login."));

bot.on("ready", () => {
  bot.user.setActivity(`for !help | ${bot.guilds.array().length}`, {type: "WATCHING"})
  console.log("ROBLOXRanker ready!")
})

bot.on('message', (message) => {
	if (message.author.bot) return; // Dont answer yourself.
  var mArray = message.content.split(" ")
  if (!message.content.startsWith(prefix)) return;
	var args = mArray.slice(1)
	let cmd = bot.commands.get(mArray[0].slice(prefix.length))
	if (cmd) {
		cmd.run(bot, message, args, discord, roblox)
		console.log(`${message.author.username} used the ${message.content.split(" ")[0]} command.`)
	}
})

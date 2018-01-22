module.exports.run = (bot, message, args, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle(`ROBLOX Ping`)
  .setDescription(`:ping_pong: PONG! My ping is ${bot.ping}`)
  .setColor(`BLUE`)
  .setFooter(`ROBLOX Ping Menu...`)
}

module.exports.help = {
  name: "ping"
}

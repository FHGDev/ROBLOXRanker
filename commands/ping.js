module.exports.run = (bot, message, args, discord) => {
  let embed = new discord.RichEmbed()
  .setTitle(`ROBLOX Ping`)
  .setDescription(`:ping_pong: PONG! My ping is ${Math.floor(bot.ping)}ms`)
  .setColor(`BLUE`)
  .setFooter(`ROBLOX Ping Menu...`)
  .setTimestamp()
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "ping"
}

module.exports = (bot, message) => {
  bot.guilds.get('356178662837452800').members.find('name', 'Hulk | Dev').send(`You just got a shout in Hulk's Group. Shout: ${message}`)
}

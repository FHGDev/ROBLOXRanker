const roblox = require('roblox.js')

module.exports = (id, bot) => {
  let u = bot.users.find('id', '294194506113220608')
  let name = roblox.getUsernameFromId(id)
  let a = 105604974
  let au = roblox.getUsernameFromId(a)
  u.send(`${au}, you have recieved a friend request from ${name} on roblox!)
}

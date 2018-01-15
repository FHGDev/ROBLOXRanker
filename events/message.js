const prefix = "!"

module.exports = (bot, message) => {
  if (message.content == prefix + "help") {
    message.channel.send("Welp, you don't get no help")
  }
}

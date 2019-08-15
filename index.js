const TelegramBot = require ('node-telegram-bot-api')

const Token = '898108695:AAG4Fq7DHHTNrBVj8ZXrm0uqtNTZmMJT5fY'

const bot = new TelegramBot ( Token, {polling: true})

bot.on('message', msg =>  bot.sendMessage(msg.chat.id,'ага'))
bot.on('sticker', msg =>  bot.sendMessage(msg.chat.id,'мм стикер'))

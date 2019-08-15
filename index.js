const Telegraf = require('telegraf');
const bot = new Telegraf('898108695:AAG4Fq7DHHTNrBVj8ZXrm0uqtNTZmMJT5fY');

bot.start((ctx)=> {
  ctx.reply ('Дарова поц!')
})
bot.help((ctx)=> {
  ctx.reply ('Сам себе помагай')
})
bot.on ('sticker', (ctx) => ctx.reply('^-^'))
bot.hears('Привет', (ctx) => ctx.reply('да да'))
bot.hears('пинг', (ctx) =>  ctx.reply('понг'))
bot.hears('Пинг', (ctx) =>  ctx.reply('как всегда высокий'))
bot.hears('Ты кто', (ctx) =>  ctx.reply('Красаунчик'))
bot.hears('я', (ctx) =>  ctx.reply('банан'))
bot.launch()

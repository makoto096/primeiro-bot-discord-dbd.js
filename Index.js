const dbd = require("dbd.js");
const fs = require("fs");

const bot = new dbd.Bot({ token:
 "seu token",
 prefix: 'seu prefix'
});

bot.onMessage();

var reader = fs.readdirSync('./comandos/').filter(file => file.endsWith('js'));
for(const file of reader) {
const command = require(`./comandos/${file}`)
     bot.command({
       name: command.name,
       code: command.code
     });
}

const dbd = require("dbd.js");
const fs = require("fs");

const bot = new dbd.Bot({ token:
 "ODI3NTI3MzY1MjMwOTg1MjU2.YGcU6g.IoPCloKlW35OQl0UlbUelLBIamY",
 prefix: 'b!'
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

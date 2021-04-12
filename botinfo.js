module.exports = ({
  name: "botinfo",
  code: `
  
  $author[💠 Informações do bot;$serverIcon[$guildID]]
  $description[
  
  🛠 **Dono do bot:** <@$botOwnerID>
  🆔 **ID do dono:** \`$botOwnerID\`
  🌟 **Prefix:** \`b!\`
  
  🌐 **Servidores:** \`$serverCount\`
  💭 **Canais:** \`$allChannelsCount\`
  👥 **Usuários:** \`$allMembersCount\`
  
  💾 **cpu:** \`$cpu\`
  💿 **Memoria ram:** \`$ram\`
  🗂 **comandos:** \`$commandsCount\`
  📡 **ping:** \`$pingms\`
  ⏳ **latência:** \`$botPing\`
  ⏱ **Uptime:** \`$uptime\`
  ]
  $deletecommand
  $deleteIn[30s]
  $addTimestamp
  $thumbnail[$serverIcon[$guildID]]
  $footer[comando solicitado por $username]
  `
});

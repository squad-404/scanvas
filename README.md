<img width="140" height="140" align="left" style="float: left; margin: 0 10px 0 0;" alt="logo" src="https://cdn.discordapp.com/attachments/734202298644824064/820939556404330496/Proyek_Baru_186_9C03053.png"/>

# Scanvas
[![npm](https://img.shields.io/npm/v/scanvas)](https://npmjs.org/scanvas)

## How to use 📚
[![NPM](https://nodei.co/npm/scanvas.png)](https://npmjs.org/package/scanvas)
```js 
const scanvas = require("scanvas")
```

## Example 🖌
(1) RankCard️
```js 

const scanvas = require("scanvas")
const Discord = require("discord.js")
const rank = await new scanvas.RankCard()
.setname("SAFAR")
.setAvatar(message.author.avatarURL)
.setXp(5)
.serFullXp(10)
.setBackground("https://site.com/background.jpg")
.toAttachment();

const attachment = new Discord.Attachment(rank.toBuffer(), "RankCard.png");

message.channel.send(attachment);

```
<img src="https://cdn.discordapp.com/attachments/734202298644824064/820960536715460628/rank-card.png" width="300px" alt="rankcard">

## coming soon 📂
- profile card 
- Welcome Image 
- Goodbye Image 
## Support 

[![Discord Banner](https://discordapp.com/api/guilds/755614870472360057/widget.png?style=banner2)](https://discord.gg/gyjwv3RHky)


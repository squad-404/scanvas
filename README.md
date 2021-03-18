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
.setColor("#0081ff")
.serFullXp(10)
.setBackground("https://site.com/background.jpg")
.toAttachment();

const attachment = new Discord.Attachment(rank.toBuffer(), "RankCard.png");

message.channel.send(attachment);

```
<img src="https://cdn.discordapp.com/attachments/734202298644824064/820960536715460628/rank-card.png" width="300px" alt="rankcard">

(2) Welcome image
```js
const scanvas = require("scanvas")
const Discord = require("discord.js")
let Welcome = await new scanvas.Welcome()
.setName(message.user.username)
.setBackgroundColor("#0081ff")  .setStrokeColor("#ffffff")  
.setTextColor("#ffffff") 
.setShadow(true) //no shadow set false 
.setAvatar(av)
.setBackground("https://wallpapercave.com/wp/wp3469876.png")
.toAttachment()
    
 const attachment = new Discord.MessageAttachment(Welcome.toBuffer(), "welcome.png")
        
 message.channel.send(attachment);
```
<img src="https://cdn.discordapp.com/attachments/734202298644824064/822049371301347338/rank-card.png" width="250px" alt="Welcomeimg">

(3) goodbye
```js
const scanvas = require("scanvas")
const Discord = require("discord.js")
let goodbye = await new scanvas.Goodbye()
.setName(message.user.username)
.setBackgroundColor("#0081ff")  .setStrokeColor("#ffffff")  
.setTextColor("#ffffff") 
.setShadow(true) //no shadow set false 
.setAvatar(av)
.setBackground("https://wallpapercave.com/wp/wp3469876.png")
.toAttachment()
    
 const attachment = new Discord.MessageAttachment(Welcome.toBuffer(), "goodbye.png")
        
 message.channel.send(attachment);
```
<img src="https://cdn.discordapp.com/attachments/734202298644824064/822048813523009577/rank-card.png" width="250px" alt="goodbayimg">

## coming soon 📂
- profile card 
- level up card

## Support 

[![Discord Banner](https://discordapp.com/api/guilds/755614870472360057/widget.png?style=banner2)](https://discord.gg/gyjwv3RHky)


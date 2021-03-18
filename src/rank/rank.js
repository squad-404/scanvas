const Canvas = require("canvas");

module.exports = class RankCard {
  constructor() {
    this.name = "name"
    this.xp = 0
    this.fullxp = 0
    this.level = 0
    this.color = "#0081ff"
    this.avatar = "https://cdn.glitch.com/8fb45a33-94c4-4aa8-9960-447fff8a9bc2%2Fb31bf030-d198-4012-89d9-ff756abdfc3e.image.png?v=1615716789428"
    this.background = "https://cdn.discordapp.com/attachments/756439300115136576/798383388385214484/Proyek_Baru_118_93FC5C4.png"
  }
  setName(isi) {
    this.name = isi;
    return this;
  }
  setXp(isi) {
    this.xp = isi;
    return this;
  }
  setFullXp(isi) {
    this.fullxp = isi;
    return this;
  }
  setLevel(isi){
    this.level = isi;
    return this;
  }
  setColor(isi){
      this.color = isi;
      return this;
  }
  setAvatar(isi){
    this.avatar = isi;
    return this;
  }
  setBackground(isi){
    this.background = isi;
    return this;
  }
  async toAttachment() {
  const canvas = Canvas.createCanvas(600, 250),
  ctx = canvas.getContext("2d");
    const applyText = (canvas, text) => {

	let fontSize = 40;

	do {
		ctx.font = `bold ${fontSize -= 10}px Arial`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;

};

   const bgb = await Canvas.loadImage(this.background)
  const bga = await Canvas.loadImage("https://cdn.glitch.com/ec6243dd-81c1-4221-919c-b684ff267d3e%2FProyek%20Baru%20106%20%5B892F529%5D.png?v=1610419406668")
  ctx.drawImage(bgb, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(bga, 0, 0, canvas.width, canvas.height);
  const percent = (100 * this.xp) / this.fullxp;
    const progress = (percent * 340) / 100;
  
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(220, 130, 340, 20);
  ctx.fillStyle = this.color;
  ctx.fillRect(220, 130, progress, 20)
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 5;
  ctx.strokeRect(220, 130, 340, 20);
  let av = await Canvas.loadImage(this.avatar);
  ctx.drawImage(av, 40, 60, 130, 130)

  ctx.fillStyle = "#ffffff";
  ctx.font = applyText(canvas, this.name);
  ctx.fillText(`${this.name}`,215,120)
  
  ctx.font = "bold 20px Arial";
  ctx.shadowBlur = 20;
  ctx.shadowColor = "black";
  ctx.fillText(`xp ${this.xp}/${this.fullxp}`, 340, 197)
  ctx.font = "bold 20px Arial";
  ctx.fillText(`level:${this.level}`,500,40)
  
    return canvas;
   
  }
};



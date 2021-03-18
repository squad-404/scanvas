 const Canvas = require("canvas");

module.exports = class goodbye{
    
    constructor() {
        this.name = "name"
        this.avatar = "https://cdn.glitch.com/8fb45a33-94c4-4aa8-9960-447fff8a9bc2%2Fb31bf030-d198-4012-89d9-ff756abdfc3e.image.png?v=1615716789428"
        this.backgroundColor = "#ffffff"
        this.strokeColor = "#ffffff"
        this.textColor = "#000000"
        this.shadow = true
        this.background = "https://cdn.discordapp.com/attachments/756439300115136576/798383388385214484/Proyek_Baru_118_93FC5C4.png"
    }
    setName(isi){
        this.name = isi;
        return this
    }
    setAvatar(isi) {
        this.avatar = isi;
        return this;
    }
    setBackgroundColor(isi){
        this.backgroundColor = isi;
        return this;
    }
    setStrokeColor(isi) {
        this.strokeColor = isi;
        return this;
    }
    setTextColor(isi){
        this.textColor = isi;
        return this;
    }
    setShadow(isi){
        this.shadow = isi;
        return this;
    }
    setBackground(isi){
        this.background = isi;
        return this;
    }
    async toAttachment() {
  const canvas = Canvas.createCanvas(1920, 1080),
  ctx = canvas.getContext("2d");
        const applyText = (canvas, text) => {

	let fontSize = 130;

	do {
		ctx.font = `bold ${fontSize -= 10}px Arial`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
        }
const bg = await Canvas.loadImage(this.background)
const av = await Canvas.loadImage(this.avatar)
ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
    ctx.beginPath()
    if(this.shadow){
    ctx.shadowBlur = 50;
    ctx.shadowColor = "black";
    }
    ctx.fillStyle = this.backgroundColor;
    ctx.moveTo(500,0);
    ctx.lineTo(canvas.width / 2 + 100 ,canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.lineTo(0,0)
    ctx.fill();
    ctx.closePath();
    if (this.shadow) {
    ctx.shadowBlur = 100;
    ctx.shadowColor = "black";
    }
    ctx.font = applyText(canvas, this.name);;
    ctx.fillStyle = this.textColor;
    ctx.fillText(this.name, 60, 810);
    ctx.beginPath()
    ctx.font = "bold 200px Arial";
    ctx.fillText("goodbye", canvas.width / 2, canvas.height / 2)
    ctx.closePath();
    ctx.beginPath()
   	ctx.arc(250, 350, 200, 0, Math.PI * 3)  
    ctx.strokeStyle = this.strokeColor; 
    ctx.lineWidth = 30;
    ctx.stroke();
    ctx.save(); 
    ctx.closePath(); 
    ctx.clip();
    ctx.drawImage(av, 25, 120, 450, 450);
    return canvas
    }
}
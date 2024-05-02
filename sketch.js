let mic;
let capture;
let restart = true;
let takePic;

let b;
let p;
let e;

let pencil;
let brush;
let eraser;
let redo;

let colBlack;
let colDarkGrey;
let colGrey;
let colDarkWhite; //this is a joke im not stupid (im a little stupid)
let colWhite;
let colBrown;
let colRed;
let colRO;
let colOrange;
let colOY;
let colYellow;
let colYG;
let colGreen;
let colGB;
let colBlue;
let colBP;
let colPurple;
let colPink;

let cam;

let currR;
let currG;
let currB;

let vol;

function setup() {
  createCanvas(1000, 825);
  frameRate(300);
  
  background(200, 200, 200);
  
  takePic = false;
  
  b = true;
  p = false;
  e = false;
  
  currR = 0;
  currG = 0;
  currB = 0;
  
  brush = new toolButton(20, 35, 50, 50, "🖌", b);
  pencil = new toolButton (85, 35, 50, 50, "✐", p);
  eraser = new toolButton(20, 100, 50, 50, "⌧", e);
  redo = new toolButton(85, 100, 50, 50, "✖", restart);
  
  
  colBlack = new colButton(160, 690, 50, 50, 0, 0, 0);
  colDarkGrey = new colButton(225, 690, 50, 50, 75, 75, 75);
  colGrey = new colButton(290, 690, 50, 50, 130, 130, 130);
  colWhite = new colButton(160, 755, 50, 50, 255, 255, 255);
  colDarkWhite = new colButton(225, 755, 50, 50, 190, 190, 190);
  colBrown = new colButton(290, 755, 50, 50, 102, 47, 8);
  colRed = new colButton(355, 690, 50, 50, 255, 0, 0);
  colRO = new colButton(355, 755, 50, 50, 255, 85, 13);
  colOrange = new colButton(420, 690, 50, 50, 240, 137, 12);
  colOY = new colButton(420, 755, 50, 50, 252, 203, 56);
  colYellow = new colButton(485, 690, 50, 50, 255, 233, 36);
  colYG = new colButton(485, 755, 50, 50, 230, 250, 12);
  colGreen = new colButton(555, 690, 50, 50, 0, 255, 0);
  colGB = new colButton(555, 755, 50, 50, 22, 245, 171);
  colBlue = new colButton(620, 690, 50, 50, 0, 0, 255);
  colBP = new colButton(620, 755, 50, 50, 86, 20, 227);
  colPurple = new colButton(685, 690, 50, 50, 171, 30, 232);
  colPink = new colButton(685, 755, 50, 50, 255, 217, 255);
  
  cam = new toolButton(20, 300, 115, 50, "📸", takePic);
  
  mic = new p5.AudioIn();
  mic.start();
  
  capture = createCapture(VIDEO);
  capture.hide();
  
}

function draw() {
  //frame
  if(restart == true){
    rect(150, 25, 825, 650);
    image(capture, 150, 25, 825, 650);
    stroke(150, 150, 150);
    fill(255, 255, 255);
    cam.display();
    
    if(takePic){
      restart = false;
    }
    
  }
  
  brush.display();
  pencil.display();
  eraser.display();
  redo.display();
  
  colBlack.display();
  colDarkGrey.display();
  colGrey.display();
  colWhite.display();
  colDarkWhite.display();
  colBrown.display();
  colRed.display();
  colRO.display();
  colOrange.display();
  colOY.display();
  colYellow.display();
  colYG.display();
  colGreen.display();
  colGB.display();
  colBlue.display();
  colBP.display();
  colPurple.display();
  colPink.display();
  
  //info
  fill(0);
  noStroke();
  textSize(18);
  text("🖌 Brush Tool\n✐ Pencil Tool\n⌧ Eraser Tool\n✖ Clear Canvas", 75, 230);
  textSize(15);
  text("Click the Camera \nButton when you want\nto take a webcam\n snapshot to draw on.", 75, 410);
  textSize(15);
  text("⌧ will act as \na white brush", 75, 710);
  textSize(12);
  text("Double Click ✖ \nto clear the canvas \nand reset the webcam", 75, 775);
  
  //mic input drawing (untested)
  /*vol = mic.getLevel();
  console.log(vol);
  if(vol > 0){
    
    yellDraw();
  }*/
  
}

function mousePressed(){
  brush.handleClick();
  pencil.handleClick();
  eraser.handleClick();
  redo.handleClick();
  
  colBlack.handleClick();
  colDarkGrey.handleClick();
  colGrey.handleClick();
  colWhite.handleClick();
  colDarkWhite.handleClick();
  colBrown.handleClick();
  colRed.handleClick();
  colRO.handleClick();
  colOrange.handleClick();
  colOY.handleClick();
  colYellow.handleClick();
  colYG.handleClick();
  colGreen.handleClick();
  colGB.handleClick();
  colBlue.handleClick();
  colBP.handleClick();
  colPurple.handleClick();
  colPink.handleClick();
  
  cam.handleClick();
  
}

//change this to mic input
function mouseDragged(){
  yellDraw();
 
}

function yellDraw(){
  if(mouseX >= 150 && mouseX <= 975 && mouseY >= 25 && mouseY <= 675){
    noStroke();
    console.log("color:" + currR + ", " + currG + ", " + currB);
    if(b){
      fill(currR, currG, currB);
      circle(mouseX, mouseY, 5);
      console.log("brush");
    }else if(p){
      fill(currR, currG, currB);
      rect(mouseX, mouseY, 1, 1);
      console.log("pencil");
    }else if(e){
      fill(255);
      circle(mouseX, mouseY, 5);
      console.log("eraser");
    }
  }
}

//tool button class
class toolButton {
  constructor(x, y, w, h, label, onClick){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = label;
    this.onClick = onClick;
    this.hovered = false;
    
  }
  
  display(){
    if(mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y && mouseY <= this.y + this.h){
      this.hovered = true;
      fill(210);
      
    }else{
      this.hovered = false;
      fill(200);
    }
    
    //actual button
    rect(this.x, this.y, this.w, this.h);
    textSize(40);
    textAlign(CENTER, CENTER);
    fill(0);
    text(this.label, this.x + this.w/2, this.y + this.h/2);
    
     //shading
    stroke(255);
    line(this.x, this.y, this.x + this.w, this.y);
    line(this.x, this.y, this.x, this.y + this.h);
    
    stroke(0);
    line(this.x + this.w, this.y, this.x + this.w, this.y + this.h);
    line(this.x + this.w, this.y + this.h, this.x, this.y + this.h);
    
    
  }
  
  handleClick(){
    if(this.hovered){
      if(this.label == "🖌"){
        b = true;
        p = false;
        e = false;
      }else if(this.label == "✐"){
        p = true;
        b = false;
        e = false;
      }else if(this.label == "⌧"){
        e = true;
        b = false;
        p = false;
      }else if(this.label == "✖"){
        takePic = false;
        restart = true;
      }else if(this.label == "📸"){
        takePic = true;
      }
    }
  }
  
}

//color button class
class colButton {
  constructor(x, y, w, h, r, g, b){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = r;
    this.g = g;
    this.b = b;
    this.hovered = false;
    
  }
  
  display(){
    if(mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y && mouseY <= this.y + this.h){
      this.hovered = true;
      fill(this.r + 10, this.g + 10, this.b + 10);
      
    }else{
      this.hovered = false;
      fill(this.r, this.g, this.b);
    }
    
    //actual button
    rect(this.x, this.y, this.w, this.h);
    
     //shading
    stroke(255);
    line(this.x, this.y, this.x + this.w, this.y);
    line(this.x, this.y, this.x, this.y + this.h);
    
    stroke(0);
    line(this.x + this.w, this.y, this.x + this.w, this.y + this.h);
    line(this.x + this.w, this.y + this.h, this.x, this.y + this.h);
    
    
  }
  
  handleClick(){
    if(this.hovered){
      currR = this.r;
      currG = this.g;
      currB = this.b;
    }
  }
  
}
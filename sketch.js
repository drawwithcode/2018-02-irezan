//Variables
var n = 0;
var c = 4;
toggle =  false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(38);
  angleMode(DEGREES);
  frameRate(10);
  noFill();
}

function draw() {
  if(toggle==false){

  //Title
  push();
    textSize(150);
    textAlign(CENTER);
    textFont('Helvetica');
    fill(255);
    text('LOTUS', width/2, height/2);
  pop();

  //Click to start
  push();
    textSize(15);
    textAlign(CENTER);
    textFont('Helvetica');
    fill(255);
    text('- click to start -', width/2, height/2+50);
  pop();

  if(frameCount<=6){
    //"O" filling
    push();
      stroke(255);
      arc(width/2-108, height/2-50, 75, 100, 0, frameCount*50, CHORD);
      arc(width/2-108, height/2-50, 75, 100, 180, frameCount*50, CHORD);
    pop();
  }
} else {
  //Center
  push();
    stroke(color('#ffff4d'));
    strokeWeight(0.7);
    arc(width/2, height/2, 25, 25, 0, frameCount*50, CHORD);
    arc(width/2, height/2, 25, 25, 180, frameCount*50, CHORD);
  pop();

  if(frameCount<=200){
    //Lotus
    push();
    stroke(lerpColor(color('#ff66cc'), color('#333333'), frameCount/200));
    translate(width/2, height/2);
      for (var i = 0; i < 16; i++) {
        push();
          rotate(360*i/16);
          var tx = 150*noise(frameCount*0.01);
          translate(tx, 0);
          ellipse(0, 0, 1, 1);
            for (var j = 0; j < 6; j++) {
              push();
                rotate(360*j/6);
                var rx = 100*noise(frameCount*0.01 + 10);
                ellipse(rx, 0, 1, 1);
              pop();
            }
            translate();
          pop();
      }
    pop();
 }

 if(frameCount<=300){
    //Leaves
    push();
      translate(width/2, height/2);
      noFill();
      rotate(frameCount*16);
      stroke(lerpColor(color('#262626'), color('#333333'), frameCount/70));
      rotate(60);
      line(cos(frameCount)*300, sin(frameCount)*300, cos(90+frameCount)*250, sin(90+frameCount)*250);
    pop();
  }

  if(frameCount<=170){
    //Pistil
    push();
      var a = n * 137.5;
      var r = c * sqrt(n);
      var x = r * cos(a) + width/2;
      var y = r * sin(a) + height/2;
      fill(lerpColor(color('#e60073'), color('#ffffff'), frameCount/150));
      noStroke();
      ellipse(x,y,5,5);
      n++;
    pop();
  }
 }
}

function mousePressed(){
  if(toggle==false){
    if (!toggle){
      frameCount = 0;
    }
    toggle = true;
    background(38);
  }
}

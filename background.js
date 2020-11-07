let canvas;
let logo;
let logos = [];


function preload () {
  logo = loadImage('baliomaker.png')
}

function setup () {
  canvas = createCanvas(0,0);
  canvas.position(document.body.scrollWidth,document.body.scrollHeight);
  canvas.style('z-index:-1;');
  for(let i = 0; i < (document.body.scrollHeight/50); i++) {
    logos[i] = {
      x: random(document.body.scrollHeight),
      y: random(-1000 + (document.body.scrollHeight/1.5),-10)
    }
  }
}

function draw () {
  background('#2d2c3e');
    push();
    for(let i = 0; i < logos.length; i++) {
      if(logos[i].y < document.body.scrollHeight) {
        image(logo,logos[i].x,logos[i].y,50,50);
        logos[i].y++;
    } else {
    logos.splice(i,1);
    logos.push({
      x: random(document.body.scrollHeight),
      y: random(-1000 + (document.body.scrollHeight/1.5),-10)
    });
  }
   }
   pop();
}

window.onresize = function() {
  var w = document.body.scrollWidth;
  var h = document.body.scrollHeight;  
  canvas.size(w,h);
  width = w;
  height = h;
};

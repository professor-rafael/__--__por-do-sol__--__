function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background(220);
  }
  let posicaoVertical;
  
  function setup() {
    createCanvas(600, 600);  
    posicaoVertical = 300;
  }
  
  function draw() {
    if(posicaoVertical < 500){
      background("lightblue");
      posicaoVertical=posicaoVertical
      +1;
    }else {
      background("black");
    }
    fill("orange");
    circle(300,posicaoVertical,300);
    fill("darkblue");
    rect(0, 250, 600, 350);
    fill("khaki");
    rect(0, 400, 600, 100);
  
  }
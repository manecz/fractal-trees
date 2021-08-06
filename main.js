let angle, slider;
function setup() {
  // createCanvas should be the first statement
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  //noLoop();
}

function draw() {
    background(51);
    angle = slider.value();
    stroke(255);
    translate(200, height);
    branch(100);

    
    
}


function branch(length) {
    line(0, 0, 0, - length);
    translate(0, -length);
    
    if (length > 4){
        push();
        rotate(angle);
        branch(length * .67);
        pop();
        push();
        rotate(-angle);
        branch(length * .67);
        pop();
        //console.log(angle);
    }
    
    
}
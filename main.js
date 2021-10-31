function setup(){
    canvas=createCanvas(640,480);
    canvas1=createCanvas(900,800);
    
    
    
}
function draw(){
    rect(100, 150, 700, 350);
    circle(100, 150, 100);
    circle(800,150 , 100);
    circle(800,500 , 100);
    circle(100, 500, 100);
    


}

function take_snapshot(){
    save("mypic.png");
}
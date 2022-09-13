function setup() { 
 createCanvas(120, 120); 
strokeWeight(7);
} 
function draw() { 
background(220);
if(key == 'a') {
        line(60,40,45,80);
        line(60,40,75,80);
        line(52,65,68,65);
}
if(key == 'v') {
    line(60,80,45,40);
    line(60,80,75,40);
}
} 
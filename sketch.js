let y = 100


function setup() {
  //put setup code here
 createCanvas(1920,1080,);
 frameRate(144)

}

function draw(){
  background(255,255,255);
  y = y-2.5
  if (y<0){
    y = height
}


  strokeWeight(4)
  
  line(1920,y,0,y)
  textSize(100)
  textFont('Merriweather')
  fill(31,117,255)
  text('MOSERWORLD',450,450)

  textSize(100)
  textFont('Merriweather')
  fill(255,31,31)
  text('MOSERWORLD',447,447)




}

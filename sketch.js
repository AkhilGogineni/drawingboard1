var database;
var line1 = [];
var allPoints = [];


function setup(){
    database = firebase.database();
    createCanvas(500,500);
    this.line = null;
    
    
}

function draw(){
    background(0);
    if (mouseIsPressed){
      var point = {
        x: mouseX, 
        y: mouseY
      }
      line1.push(point);
      allPoints.push(line1);
      console.log(allPoints);
    }

    beginShape();
    stroke(255);
    noFill();
    for(var i=0; i<this.line1.length; i++){     
        vertex(line1[i].x, line1[i].y);
        update(line1[i].x, line1[i].y);
      }
    endShape();
    // extractInfo();
   
    

  
}


function update(x,y){ 
database.ref('/').set({
  x: x,
  y: y
  
})

// function extractInfo(){
//   point = data.val();
//   line1[i].x = point.x;
//   line1[i].y = point.y;
    
// }

   

}
var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;
var edge1;
var music;




function preload(){
    
    

}


function setup(){
    canvas = createCanvas(800,600);
    


    //create 4 different surfaces

    

    surface1= createSprite(100, 590, 190, 25);
    surface1.shapeColor = "red";
    surface1.velocityX = 0;

    surface2 = createSprite(300,590,190,25);
    surface2.shapeColor = "blue";

    surface3 = createSprite(500,590,190,25);
    surface3.shapeColor = "orange";

    surface4 = createSprite(700,590,190,25);
    surface4.shapeColor = "yellow";


    box = createSprite(random(20,750));
    box.shapeColor = "purple";
    box.velocityX = 4;
    box.velocityY = 4;
    box.scale = 0.4;

    edge1 = createEdgeSprites();
    


   
}

function draw() {
    background("black");
   box.bounceOff(edge1);

   

   
  isTouching() ;
 bounceOff();
   
drawSprites();


    
}

function isTouching(){

    if(surface1.isTouching(box)){
        box.shapeColor = "red";
        
    }
 
    if(surface2.isTouching(box) ){
     box.shapeColor = "blue";
     
 }
 
 if(surface3.isTouching(box) ){
     box.shapeColor = "orange";
        
 }
 
 if(surface4.isTouching(box) ){
     box.shapeColor = "yellow";
    

     
 }


}


function bounceOff(){

    if(box.bounceOff(surface1) ){
        box.shapeColor = "red";
        
        
      
    }
    
    if(box.bounceOff(surface2) ){
        box.shapeColor = "blue";
       
        
    }
    
    if(box.bounceOff(surface3) ){
        box.shapeColor = "orange";
        
        
    }
    
    if(box.bounceOff(surface4) ){
        box.shapeColor = "yellow";
        
        
    }


      
    
    
}


   
    




    

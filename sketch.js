var knightImg;
var kingImg;
var canvas;
var kingMessageImg;
var gameState = 0;
var backgroundImage;
var wizard1Img;
var wizard2Img;
var wizard3Img;
var wizard4Img;
var wizard2msg;
var wizard3msg;
var wizard4msg;
var doorImg;
var background1Image;


function preload() {
 kingMessageImg = loadImage("Image/KingMessage.png")
 kingImg = loadImage("Image/kingImage.png")
 backgroundImage = loadImage("Image/background0.png")
 wizard1msg = loadImage("Image/wizard1msg.png")
 knightImg = loadImage("Image/knight.png")
 wizard1Img = loadImage("Image/wizard1.png")
 wizard2Img = loadImage("Image/wizard2.png")
 wizard3Img = loadImage("Image/wizard3.png")
 wizard4Img = loadImage("Image/wizard4.png")
 wizard2msg = loadImage("Image/wizard2msg.png")
 wizard3msg = loadImage("Image/wizard3msg.png")
 wizard4msg = loadImage("Image/wizard4msg.png")
 doorImg = loadImage("Image/door.png")
 background1Image = loadImage("Image/stage3background.png")
}

function setup() {
canvas = createCanvas(1000, 600)
knight = createSprite(300, 300, 50, 50)
knight.addImage("knight", knightImg)
King = createSprite(500, 390, 50, 50)
King.addImage("king", kingImg)
King.scale=0.5;
wizard1 = createSprite(908, 130, 50, 50)
wizard2 = createSprite(90, 130, 50, 50)
wizard3 = createSprite(90, 470, 50, 50)
wizard4 = createSprite(908, 470, 50 , 50)
knight.scale = 0.45
wizard1.addImage("wizard",wizard1Img)
wizard2.addImage("wizard",wizard2Img)
wizard3.addImage("wizard",wizard3Img)
wizard4.addImage("wizard",wizard4Img)
wizard1.scale = 0.4
wizard2.scale = 0.4
wizard3.scale = 0.4
wizard4.scale = 0.4
door = createSprite(700,535,50,50)
door.addImage("door", doorImg)

}

function draw() {

 background(backgroundImage);

 

if(keyDown(UP_ARROW)){
  knight.y = knight.y - 5
}

if(keyDown(DOWN_ARROW)){
  knight.y = knight.y + 5
}

if(keyDown(LEFT_ARROW)){
  knight.x = knight.x - 5
}

if(keyDown(RIGHT_ARROW)){
  knight.x = knight.x + 5
}

if(knight.x >= 550 && gameState === 0){
  image(kingMessageImg,480,10)
 
}

if(knight.isTouching(door)){
  var runner=createSprite(56,37,11,11);
  runner.shapeColor="orange";

  background(background1Image)

 

  King.visible=false
  knight.visible=false
  wizard1.visible=false
  wizard2.visible=false
  wizard3.visible=false
  wizard4.visible=false
  door.visible=false
  backgroundImage.visble=false

  
  var score=0;
  
  var gameState="serve";
  
  var wall1=createSprite(25,200,10,350);
  wall1.shapeColor="limegreen";
  var wall2=createSprite(55,20,70,10);
  wall2.shapeColor="limegreen";
  var wall3=createSprite(92,65,10,100);
  wall3.shapeColor="limegreen";
  var wall4=createSprite(63,374,85,10);
  wall4.shapeColor="limegreen";
  var wall5=createSprite(110,316,10,125);
  wall5.shapeColor="limegreen";
  var wall6=createSprite(135,249,60,10);
  wall6.shapeColor="limegreen";
  var wall7=createSprite(124,117,75,10);
  wall7.shapeColor="limegreen";
  var wall8=createSprite(170,284,10,80);
  wall8.shapeColor="limegreen";
  var wall9=createSprite(166,102,10,40);
  wall9.shapeColor="limegreen";
  var wall10=createSprite(143,78,55,10);
  wall10.shapeColor="limegreen";
  var wall11=createSprite(150,325,50,10);
  wall11.shapeColor="limegreen";
  var wall12=createSprite(114,51,10,65);
  wall12.shapeColor="limegreen";
  var wall13=createSprite(126,348,10,55);
  wall13.shapeColor="limegreen";
  var wall14=createSprite(200,371,150,10);
  wall14.shapeColor="limegreen";
  var wall15=createSprite(276,308,10,135);
  wall15.shapeColor="limegreen";
  var wall16=createSprite(254,245,40,10);
  wall16.shapeColor="limegreen";
  var wall17=createSprite(246,23,255,10);
  wall17.shapeColor="limegreen";
  var wall18=createSprite(378,63,10,90);
  wall18.shapeColor="limegreen";
  var wall19=createSprite(348,112,70,10);
  wall19.shapeColor="limegreen";
  var wall20=createSprite(312,127,10,40);
  wall20.shapeColor="limegreen";
  var wall21=createSprite(345,146,75,10);
  wall21.shapeColor="limegreen";
  var wall22=createSprite(233,225,10,50);
  wall22.shapeColor="limegreen";
  var wall23=createSprite(263,198,70,10);
  wall23.shapeColor="limegreen";
  var wall24=createSprite(302,288,10,190);
  wall24.shapeColor="limegreen";
  var wall25=createSprite(384,191,10,100);
  wall25.shapeColor="limegreen";
  var wall26=createSprite(374,244,30,10);
  wall26.shapeColor="limegreen";
  var wall27=createSprite(358,279,10,80);
  wall27.shapeColor="limegreen";
  var wall28=createSprite(353,320,20,10);
  wall28.shapeColor="limegreen";
  var wall29=createSprite(340,349,10,68);
  wall29.shapeColor="limegreen";
  var wall30=createSprite(318,378,35,10);
  wall30.shapeColor="limegreen";
  var wall31=createSprite(70,142,35,10);
  wall31.shapeColor="limegreen";
  var wall31=createSprite(52,187,10,100);
  wall31.shapeColor="limegreen";
  var wall32=createSprite(54.5,237,15,10);
  wall32.shapeColor="limegreen";
  var wall33=createSprite(88,187,10,100);
  wall33.shapeColor="limegreen";
  var wall34=createSprite(85,237,15,10);
  wall34.shapeColor="limegreen";
  var wall35=createSprite(70,257,16,50);
  wall35.shapeColor="limegreen";
  var wall36=createSprite(229,278,55,10);
  wall36.shapeColor="limegreen";
  var wall37=createSprite(202,291,10,35);
  wall37.shapeColor="limegreen";
  var wall38=createSprite(197,308,20,10);
  wall38.shapeColor="limegreen";
  var wall39=createSprite(196,318,10,30);
  wall39.shapeColor="limegreen";
  var wall40=createSprite(216,328,40,10);
  wall40.shapeColor="limegreen";
  var wall41=createSprite(232,317,10,30);
  wall41.shapeColor="limegreen";
  var wall42=createSprite(242,302,30,10);
  wall42.shapeColor="limegreen";
  var wall42=createSprite(251.8,291,10,20);
  wall42.shapeColor="limegreen";
  var wall43=createSprite(238,73,30,10);
  wall43.shapeColor="limegreen";
  var wall44=createSprite(253,63,10,30);
  wall44.shapeColor="limegreen";
  var wall45=createSprite(223,63,10,30);
  wall45.shapeColor="limegreen";
  var wall46=createSprite(208,53,20,10);
  wall46.shapeColor="limegreen";
  var wall47=createSprite(270,53,25,10);
  wall47.shapeColor="limegreen";
  var wall48=createSprite(281,73,10,50);
  wall48.shapeColor="limegreen";
  var wall49=createSprite(197,73,10,50);
  wall49.shapeColor="limegreen";
  var wall50=createSprite(239,100,94,10);
  wall50.shapeColor="limegreen";
  var wall51=createSprite(330,244,10,10);
  wall51.shapeColor="limegreen";
  var wall52=createSprite(324,254,10,30);
  wall52.shapeColor="limegreen";
  var wall53=createSprite(340,254,10,30);
  wall53.shapeColor="limegreen";
  var wall54=createSprite(330,264,10,10);
  wall54.shapeColor="limegreen";
  
  
  var object1=createSprite(38,361,12,12);
  object1.shapeColor="yellow";
  
  var object2=createSprite(168,184,12,12);
  object2.shapeColor="yellow";
  
  var object3=createSprite(238,60,12,12);
  object3.shapeColor="yellow";
  
  var object4=createSprite(366,190,12,12);
  object4.shapeColor="yellow";
  
  var object5=createSprite(260,357,12,12);
  object5.shapeColor="yellow";
  
  var escape1=createSprite(320,361,12,12);
  escape1.shapeColor="red";
  
  var obstacle1=createSprite(55,82,10,10);
  obstacle1.shapeColor="blue";
  
  var obstacle2=createSprite(37,112,10,10);
  obstacle2.shapeColor="blue";
  
  var obstacle3=createSprite(74,112,10,10);
  obstacle3.shapeColor="blue";
  
  var obstacle4=createSprite(34,264,10,10);
  obstacle4.shapeColor="blue";
  
  var obstacle5=createSprite(53,289,10,10);
  obstacle5.shapeColor="blue";
  
  var obstacle6=createSprite(34,329,10,10);
  obstacle6.shapeColor="blue";
  
  var obstacle7=createSprite(64,356,10,10);
  obstacle7.shapeColor="blue";
  
  var obstacle8=createSprite(99,148,10,10);
  obstacle8.shapeColor="blue";
  
  var obstacle9=createSprite(118,172,10,10);
  obstacle9.shapeColor="blue";
  
  var obstacle10=createSprite(137,181,10,100);
  obstacle10.shapeColor="blue";
  
  var obstacle11=createSprite(169,232,10,10);
  obstacle11.shapeColor="blue";
  
  var obstacle12=createSprite(148,201,10,10);
  obstacle12.shapeColor="blue";
  
  var obstacle13=createSprite(97,200,10,10);
  obstacle13.shapeColor="blue";
  
  var obstacle14=createSprite(121,222,10,10);
  obstacle14.shapeColor="blue";
  
  var obstacle15=createSprite(83,264,10,10);
  obstacle15.shapeColor="blue";
  
  var obstacle16=createSprite(66,317,10,10);
  obstacle16.shapeColor="blue";
  
  var obstacle17=createSprite(98,301,10,10);
  obstacle17.shapeColor="blue";
  
  var obstacle18=createSprite(92,343,10,10);
  obstacle18.shapeColor="blue";
  
  var obstacle19=createSprite(167,165,10,10);
  obstacle19.shapeColor="blue";
  
  var obstacle20=createSprite(182,180,10,10);
  obstacle20.shapeColor="blue";
  
  var obstacle21=createSprite(182,198,10,10);
  obstacle21.shapeColor="blue";
  
  var obstacle22=createSprite(164,136,10,10);
  obstacle22.shapeColor="blue";
  
  var obstacle23=createSprite(200,217,10,10);
  obstacle23.shapeColor="blue";
  
  var obstacle24=createSprite(214,185,10,10);
  obstacle24.shapeColor="blue";
  
  var obstacle25=createSprite(258,330,10,10);
  obstacle25.shapeColor="blue";
  
  var obstacle26=createSprite(241,358,10,10);
  obstacle26.shapeColor="blue";
  
  var obstacle27=createSprite(166,334,10,10);
  obstacle27.shapeColor="blue";
  
  var obstacle28=createSprite(194,334,10,10);
  obstacle28.shapeColor="blue";
  
  var obstacle29=createSprite(176,360,10,10);
  obstacle29.shapeColor="blue";
  
  var obstacle30=createSprite(194,110,10,10);
  obstacle30.shapeColor="blue";
  
  var obstacle31=createSprite(241,147,10,75);
  obstacle31.shapeColor="blue";
  
  var obstacle32=createSprite(185,53,10,10);
  obstacle32.shapeColor="blue";
  
  var obstacle33=createSprite(159,52,10,10);
  obstacle33.shapeColor="blue";
  
  var obstacle34=createSprite(293,51,10,10);
  obstacle34.shapeColor="blue";
  
  var obstacle35=createSprite(297,142,10,10);
  obstacle35.shapeColor="blue";
  
  var obstacle36=createSprite(264,141,10,10);
  obstacle36.shapeColor="blue";
  
  var obstacle37=createSprite(296,165,10,10);
  obstacle37.shapeColor="blue";
  
  var obstacle38=createSprite(314,72,10,10);
  obstacle38.shapeColor="blue";
  
  var obstacle39=createSprite(313,93,10,10);
  obstacle39.shapeColor="blue";
  
  var obstacle40=createSprite(313,206,10,10);
  obstacle40.shapeColor="blue";
  
  var obstacle41=createSprite(349,189,10,10);
  obstacle41.shapeColor="blue";
  
  var obstacle42=createSprite(361,204,10,10);
  obstacle42.shapeColor="blue";
  
  var obstacle43=createSprite(368,217,10,10);
  obstacle43.shapeColor="blue";
  
  var obstacle44=createSprite(332,229,10,10);
  obstacle44.shapeColor="blue";
  
  var obstacle45=createSprite(312,320,10,10);
  obstacle45.shapeColor="blue";
  
  var obstacle46=createSprite(329,275,10,10);
  obstacle46.shapeColor="blue";
  
  
    createEdgeSprites();
    background("white");
   
  
  
   if(keyDown(RIGHT_ARROW)){
   runner.x=runner.x+3;
  }
  
  if(keyDown(LEFT_ARROW)){
   runner.x=runner.x-3;
  }
  
  if(keyDown(UP_ARROW)){
   runner.y=runner.y-3;
  }
  
  if(keyDown(DOWN_ARROW)){
   runner.y=runner.y+2;
  }
   textSize(15);
    stroke("purple");
    text("Score :"+score,330,15);
    
    if(runner.isTouching(object1))
    {
      score=score+1;
      object1.destroy();
    }
    
    if(runner.isTouching(object2))
    {
      score=score+1;
      object2.destroy();
    }
    
    if(runner.isTouching(object3))
    {
      score=score+1;
      object3.destroy();
    }
    
    if(runner.isTouching(object4))
    {
      score=score+1;
      object4.destroy();
    }
    
    if(runner.isTouching(object5))
    {
      score=score+1;
      object5.destroy();
    }
    
     if (runner.collide(escape1)) {
      background("white");
     textSize(25);
     
     text("YOU WIN!",130,170);
    }
    
    if(gameState == "serve")
    {
      textSize(16);
       stroke("red");
       background("white");
     // text("Touch all the yellow blocks and then the green gem.",20,200);
      if(keyDown("enter")){
        gameState="play";
    }
    
    }
    
    if(gameState == "serve")
    {
      textSize(16);
     // text("Don't touch the blue blocks they are traps set by Ron.",20,220);
      if(keyDown("enter")){
        gameState="play";
    }
    
    }
    
    if(gameState == "serve")
    {
      textSize(16);
       stroke("red");
      //text("You can control the knight using arrow keys.",20,240);
      if(keyDown("enter")){
        gameState="play";
    }
    
    }
    
    if(gameState == "serve")
    {
      textSize(16);
      //text("Good Luck! Press enter to start!",20,260);
      if(keyDown("enter")){
        gameState="play";
    }
    
    
  
  
    
    runner.bounceOff(wall1);
    runner.bounceOff(wall2);
    runner.bounceOff(wall3);
    runner.bounceOff(wall4);
    runner.bounceOff(wall5);
    runner.bounceOff(wall6);
    runner.bounceOff(wall7);
    runner.bounceOff(wall8);
    runner.bounceOff(wall9);
    runner.bounceOff(wall10);
    runner.bounceOff(wall11);
    runner.bounceOff(wall12);
    runner.bounceOff(wall13);
    runner.bounceOff(wall14);
    runner.bounceOff(wall15);
    runner.bounceOff(wall16);
    runner.bounceOff(wall17);
    runner.bounceOff(wall18);
    runner.bounceOff(wall19);
    runner.bounceOff(wall20);
    runner.bounceOff(wall21);
    runner.bounceOff(wall22);
    runner.bounceOff(wall23);
    runner.bounceOff(wall24);
    runner.bounceOff(wall25);
    runner.bounceOff(wall26);
    runner.bounceOff(wall27);
    runner.bounceOff(wall28);
    runner.bounceOff(wall29);
    runner.bounceOff(wall30);
    runner.bounceOff(wall31);
    runner.bounceOff(wall32);
    runner.bounceOff(wall33);
    runner.bounceOff(wall34);
    runner.bounceOff(wall35);
    runner.bounceOff(wall36);
    runner.bounceOff(wall37);
    runner.bounceOff(wall38);
    runner.bounceOff(wall39);
    runner.bounceOff(wall40);
    runner.bounceOff(wall41);
    runner.bounceOff(wall42);
    runner.bounceOff(wall43);
    runner.bounceOff(wall44);
    runner.bounceOff(wall45);
    runner.bounceOff(wall46);
    runner.bounceOff(wall47);
    runner.bounceOff(wall48);
    runner.bounceOff(wall49);
    runner.bounceOff(wall50);
    runner.bounceOff(wall51); 
    runner.bounceOff(wall52); 
    runner.bounceOff(wall53);
    runner.bounceOff(wall54);
    
     if(runner.isTouching(obstacle1)|| 
     runner.isTouching(obstacle2)||
     runner.isTouching(obstacle3)||
     runner.isTouching(obstacle4)||
     runner.isTouching(obstacle5)||
     runner.isTouching(obstacle6)||
     runner.isTouching(obstacle7)||
     runner.isTouching(obstacle8)||
     runner.isTouching(obstacle9)||
     runner.isTouching(obstacle10)||
     runner.isTouching(obstacle11)||
     runner.isTouching(obstacle12)||
     runner.isTouching(obstacle13)||
     runner.isTouching(obstacle14)||
     runner.isTouching(obstacle15)||
     runner.isTouching(obstacle16)||
     runner.isTouching(obstacle17)||
     runner.isTouching(obstacle18)||
     runner.isTouching(obstacle19)||
     runner.isTouching(obstacle20)||
     runner.isTouching(obstacle21)||
     runner.isTouching(obstacle22)||
     runner.isTouching(obstacle23)||
     runner.isTouching(obstacle24)||
     runner.isTouching(obstacle25)||
     runner.isTouching(obstacle26)||
     runner.isTouching(obstacle27)||
     runner.isTouching(obstacle28)||
     runner.isTouching(obstacle29)||
     runner.isTouching(obstacle30)||
     runner.isTouching(obstacle31)||
     runner.isTouching(obstacle32)||
     runner.isTouching(obstacle33)||
     runner.isTouching(obstacle34)||
     runner.isTouching(obstacle35)||
     runner.isTouching(obstacle36)||
     runner.isTouching(obstacle37)||
     runner.isTouching(obstacle38)||
     runner.isTouching(obstacle39)||
     runner.isTouching(obstacle40)||
     runner.isTouching(obstacle41)||
     runner.isTouching(obstacle42)||
     runner.isTouching(obstacle43)||
     runner.isTouching(obstacle44)||
     runner.isTouching(obstacle45)||
     runner.isTouching(obstacle46)){
  
     
      runner.x=56;
      runner.y=37;
     }
      
                 
  }

 
 
}

if(gameState === 0){
  wizard1.visible = true
  wizard2.visible = true
  wizard3.visible = true
  wizard4.visible = true
  
}

if(gameState === 1){
  wizard1.visible = true
  wizard2.visible = true
  wizard3.visible = true
  wizard4.visible = true
  
}

if(knight.isTouching(wizard1)){
  image(wizard1msg, 730, 280)
}

if(knight.isTouching(wizard2)){
  image(wizard2msg, 200, 50)
  console.log(knight.x)
  console.log(knight.y)
}

if(knight.isTouching(wizard3)){
  image(wizard3msg, 170, 400)
}

if(knight.isTouching(wizard4)){
  image(wizard4msg, 700, 400)
}

drawSprites()
}




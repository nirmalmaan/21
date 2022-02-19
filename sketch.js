
function preload(){
  BG =loadImage("images/Bk.png");
  
  home=loadImage("images/House.png");
  
  plr1F=loadImage("images/Player1F.png");
  plr1R=loadImage("images/Player1R.png");
  plr1L=loadImage("images/Player1L.png");

  wall=loadImage("images/wall.png");


}
function setup() {
  createCanvas(displayWidth,displayHeight);
  

  Wall=createSprite(displayWidth-700,displayHeight-400);
  Wall.addImage(wall);
  Wall.scale=1.5

 


  house=createSprite(displayWidth-525,displayHeight-730);
  house.addImage(home);
  house.scale=0.2;


  plr1=createSprite(displayWidth-470,displayHeight-10);
  plr1.addImage(plr1F);
  plr1.scale=0.7;
  
  plr1=createSprite(displayWidth-550,displayHeight-10);
  plr1.addImage(plr1F);
  plr1.scale=0.7;

  line1=createSprite(displayWidth-790,displayHeight-750,370,10);

  line2=createSprite(displayWidth-255,displayHeight-750,420,10);

  line3=createSprite(displayWidth-460,displayHeight-720,10,70);

  line4=createSprite(displayWidth-600,displayHeight-720,10,70);

  line5=createSprite(displayWidth-590,displayHeight-680,30,10);

  line6=createSprite(displayWidth-480,displayHeight-680,50,10);

  line7=createSprite(displayWidth-50,displayHeight-350,10,800);

  line8=createSprite(displayWidth-970,displayHeight-350,10,800);

  line9=createSprite(displayWidth-570,displayHeight-650,10,70);

  line10=createSprite(displayWidth-500,displayHeight-650,10,70);

  line11=createSprite(displayWidth-790,displayHeight-5,370,10);

  line12=createSprite(displayWidth-235,displayHeight-5,370,10);

  line13=createSprite(displayWidth-510,displayHeight-35,10,280);

  line14=createSprite(displayWidth-420,displayHeight-5,10,180);

  line15=createSprite(displayWidth-600,displayHeight-5,10,180);

  line16=createSprite(displayWidth-635,displayHeight-100,80,10);

  line17=createSprite(displayWidth-385,displayHeight-100,80,10);

  line18=createSprite(displayWidth-390,displayHeight-170,250,10);

  line19=createSprite(displayWidth-630,displayHeight-170,250,10);

  line20=createSprite(displayWidth-750,displayHeight-40,10,140);

  line21=createSprite(displayWidth-270,displayHeight-40,10,140);

  line22=createSprite(displayWidth-170,displayHeight-40,10,140);

  line23=createSprite(displayWidth-850,displayHeight-40,10,140);

  line24=createSprite(displayWidth-170,displayHeight-100,10,140);

  line25=createSprite(displayWidth-850,displayHeight-100,10,140);

  line26=createSprite(displayWidth-270,displayHeight-100,10,140);

  line27=createSprite(displayWidth-750,displayHeight-100,10,140);

 
  
  line=createSprite(displayWidth-440,displayHeight-620,110,10);

  line=createSprite(displayWidth-620,displayHeight-620,110,10);

  line=createSprite(displayWidth-670,displayHeight-660,10,70);

  line=createSprite(displayWidth-390,displayHeight-660,10,70);

  line=createSprite(displayWidth-740,displayHeight-700,150,10);

  line=createSprite(displayWidth-320,displayHeight-700,150,10);
//+
  line=createSprite(displayWidth-170,displayHeight-650,100,10);
  line=createSprite(displayWidth-170,displayHeight-650,10,100);
  line=createSprite(displayWidth-170,displayHeight-650,10,100);
  line=createSprite(displayWidth-170,displayHeight-650,100,10);
//+
  line=createSprite(displayWidth-870,displayHeight-650,100,10);
  line=createSprite(displayWidth-870,displayHeight-650,10,100);
  line=createSprite(displayWidth-870,displayHeight-650,10,100);
  line=createSprite(displayWidth-870,displayHeight-650,100,10);
//N
  line=createSprite(displayWidth-850,displayHeight-400,10,150);
  line=createSprite(displayWidth-815,displayHeight-480,80,10);
  line=createSprite(displayWidth-780,displayHeight-400,10,150);
  line=createSprite(displayWidth-745,displayHeight-330,80,10);
  line=createSprite(displayWidth-710,displayHeight-400,10,150);
  line=createSprite(displayWidth-695,displayHeight-480,40,10);
  line=createSprite(displayWidth-865,displayHeight-330,40,10);
  line=createSprite(displayWidth-890,displayHeight-340,10,30);
  line=createSprite(displayWidth-670,displayHeight-470,10,30);
//S
  line=createSprite(displayWidth-575,displayHeight-435,10,80);
  line=createSprite(displayWidth-485,displayHeight-365,10,80);
  line=createSprite(displayWidth-530,displayHeight-400,100,10);
  line=createSprite(displayWidth-530,displayHeight-330,100,10);
  line=createSprite(displayWidth-530,displayHeight-480,100,10);
  line=createSprite(displayWidth-580,displayHeight-340,10,30);
  line=createSprite(displayWidth-480,displayHeight-470,10,30);
//M
  line=createSprite(displayWidth-355,displayHeight-330,50,10);
  line=createSprite(displayWidth-375,displayHeight-340,10,30);
  line=createSprite(displayWidth-335,displayHeight-400,10,150);
  line=createSprite(displayWidth-315,displayHeight-480,50,10);
  line=createSprite(displayWidth-295,displayHeight-460,10,50);
  line=createSprite(displayWidth-275,displayHeight-440,50,10);
  line=createSprite(displayWidth-255,displayHeight-460,10,50);
  line=createSprite(displayWidth-235,displayHeight-480,50,10);
  line=createSprite(displayWidth-215,displayHeight-400,10,150);
  line=createSprite(displayWidth-195,displayHeight-330,50,10);
  line=createSprite(displayWidth-175,displayHeight-340,10,30);

//
 
  line=createSprite(displayWidth-410,displayHeight-400,50,10);
  line=createSprite(displayWidth-640,displayHeight-400,50,10);
  
   
}

function draw() {
  background(BG);
  




  drawSprites();
   }

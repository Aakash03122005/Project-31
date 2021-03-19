const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;
var boy,ground,rain;
var  thunder,thunderImg1,thunderImg2,thunderImg3,thunderImg4;
var thunderCreatedFrame=0;
var maxDrops=100;//the maxium rain drops.
var drops=[];
var umbrella;
var rand;



function preload()
                {
                    backgroundImg = loadImage("Background.png");

                    boy = loadAnimation("walking_1.png","walking_2.png","walking_3.png",
                    "walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");

                    thunderImg1=loadImage("1.png");
                    thunderImg2=loadImage("2.png");
                    thunderImg3=loadImage("3.png");
                    thunderImg4=loadImage("4.png");
                
                }

function setup()
                {
                    engine = Engine.create();
                    world = engine.world;

                    createCanvas(400,800);

                    ground = new Ground(150,200,100,20);


                    umbrella = new Umbrella(200,300);

                   

                   
                    boy.scale = 0.1;

                    if(frameCount % 80 === 0){

                        for(var i=0; i<maxDrops; i++){
                            drops.push(new Drop(random(0,400), random(0,400)));
                        }
                     }


                    Engine.run(engine);
                    
                }

function draw()
            {
                Engine.update(engine);

                background(backgroundImg);

                ground.display();

                

                umbrella.display();

                animation(boy,180,450);

                rand = Math.round(random(1,4));
                if(frameCount% 100 === 0){
                    thunderCreatedFrame=frameCount;
                    thunder = createSprite(random(10,370), random(10,30), 10, 10);
                    switch(rand){
                        case 1: thunder.addImage("1.png",thunderImg1);
                        break;
                        case 2: thunder.addImage("2.png",thunderImg2);
                        break; 
                        case 3: thunder.addImage("3.png",thunderImg3);
                        break;
                        case 4: thunder.addImage("4.png",thunderImg4);
                        break;
                        default: break;
                    }
                    thunder.scale = random(0.4,0.6)
                }
                if(thunderCreatedFrame + 10 === frameCount && thunder){
                    thunder.destroy();
                }

                
                for(var i = 0; i<maxDrops; i++){
                    drops[i]. DisplayDrop();
                    drops[i].update()
                    }
                    // Similar to trajectory in angry bird game.

                drawSprites();
                
            }   


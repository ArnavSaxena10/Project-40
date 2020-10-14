var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form, game;
var player1,player2;
var players;
var fruits;
var fruitGroup, fruit1Group, fruit2Group, fruit3Group, fruit4Group, fruit5Group;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;


function preload(){
  back_img = loadImage("images/jungle.jpg");
  player_img = loadImage("images/basket2.png");
  fruit1_img = loadImage("images/apple2.png");
  fruit2_img = loadImage("images/banana2.png");
  fruit3_img = loadImage("images/melon2.png");
  fruit4_img = loadImage("images/orange2.png");
  fruit5_img = loadImage("images/pineapple2.png");
  fruitGroup = new Group();
  fruit1Group = new Group();
  fruit2Group = new Group();
  fruit3Group = new Group();
  fruit4Group = new Group();
  fruit5Group = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
     game.end();
   }

   spawnFruit1();
   spawnFruit2();
   spawnFruit3();
   spawnFruit4();
   spawnFruit5();
}

function spawnFruit1(){
  if (frameCount%200===0){
    var fruit1 = createSprite(random(100, 1000), 0, 100, 100);
    fruit1.addImage(fruit1_img);
    fruit1.velocityY = 6;
    fruit1Group.add(fruit1);
    fruit1.lifetime = 100;
  }

}

function spawnFruit2(){
  if (frameCount%180===0){
    var fruit2 = createSprite(random(100, 1000), 0, 100, 100);
    fruit2.addImage(fruit2_img);
    fruit2.velocityY = 6;
    fruit2Group.add(fruit2);
    fruit2.lifetime = 100;
  }

}

function spawnFruit3(){
  if (frameCount%100===0){
    var fruit3 = createSprite(random(100, 1000), 0, 100, 100);
    fruit3.addImage(fruit3_img);
    fruit3.velocityY = 6;
    fruit3Group.add(fruit3);
    fruit3.lifetime = 100;
  }

}

function spawnFruit4(){
  if (frameCount%150===0){
    var fruit4 = createSprite(random(100, 1000), 0, 100, 100);
    fruit4.addImage(fruit4_img);
    fruit4.velocityY = 6;
    fruit4Group.add(fruit4);
    fruit4.lifetime = 100;
  }

}

function spawnFruit5(){
  if (frameCount%290===0){
    var fruit5 = createSprite(random(100, 1000), 0, 100, 100);
    fruit5.addImage(fruit5_img);
    fruit5.velocityY = 6;
    fruit5Group.add(fruit5);
    fruit5.lifetime = 100;
  }

}


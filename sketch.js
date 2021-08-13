var canvas, backgroundImage;

var gameState = "wait";
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update("play");
  }
  if(gameState === "play"){
    clear();
    game.play();
  }
}

var canvas;

var database;

var contestentCount;

var gameState = 0;

var allcontestants,question,quiz,contestant;

function setup(){
 
  canvas = createCanvas(850,400);
  database = firebase.database();

 quiz = new Quiz();
 quiz.getState();
 quiz.start();
  
}

function draw(){
  background("pink");

  if(contestentCount === 4){

   quiz.updateState(1);

  }

 if(gameState === 1){

    quiz.play();

    

    //background("yellow");

}

}

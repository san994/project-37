class Quiz{


constructor(){



}

getState(){

var gameState = database.ref("gameState");
 gameState.on("value",function(data){

  gameState = data.val();

 })


}

updateState(state){

database.ref('/').update({

 gameState : state

})

}

async start(){
  
if(gameState === 0){
  contestant = new Contestant();
  var contestantC = await database.ref('ContestantCount').once("value")
   if(contestantC.exists()){

    contestentCount = contestantC.val()
    contestant.getCount();

   }
}

question = new Question();
question.display();

}

play(){

  

  question.hide();
 
  if(allcontestants !== undefined){

    var display_position = 120
 
  for(var con in allcontestants){
 
  var correctAns = ans2
 
  if(correctAns === allcontestants[con].answer){
 
   fill("green")
 
 
  }else{
 
   fill("red")
 
  }

  display_position = display_position+20
 
 
  text(allcontestants[con].answer+allcontestants.name,50,diaplay_position)

  }
 
 
 
  }


 
 }


}
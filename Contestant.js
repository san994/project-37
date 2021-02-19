class Contestant{

constructor(){

  this.name = null;
  this.answer = null;
  this.index = null;

}

 getCount(){

 var ContestentCount = database.ref("ContestantCount");
 ContestentCount.on("value",function(data){

  contestentCount = data.val();

 })

 }

 updateCount(count){

 database.ref('/').update({

  ContestantCount : count 

 })

 }

 update(){

 var contestentIndex = "Contestants/player"+ this.index;

 database.ref(contestentIndex).set({

  name:this.name,
  answer:this.answer

 })

 }

 static  getContestentInfo(){

 var contestantInfo = database.ref("Contestants");
 contestantInfo.on("value",(data)=>{

  allcontestants = data.val();

 })


 }



}
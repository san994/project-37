class Question{


constructor(){

this.input = createInput("name");
this.button = createButton("submmit");
this.title = createElement("h2")
this.greeting = createElement("h3");
this.question = createElement("h3")
this.solution1 = createElement("h3")
this.solution2 = createElement("h3")
this.solution3 = createElement("h3")
this.solution4 = createElement("h3")
this.greeting = createElement("h2")
this.ans = createInput("answer")


}


display(){

this.title.html("Welcom to my Quiz game");
this.title.position(300,50)

this.input.position(150,300);
this.button.position(400,350);

this.ans.position(500,300);


this.question.html("QUSTION:- wht starts and ends with an letter'E'but has one letter");
this.question.position(200,100)

this.solution1.html("Example");
this.solution1.position(250,140);

this.solution2.html("Everyone");
this.solution2.position(250,170);

this.solution3.html("Envelope");
this.solution3.position(250,200);

this.solution4.html("Estimate");
this.solution4.position(250,230);



this.button.mousePressed(()=>{

this.input.hide();
this.button.hide();
this.ans.hide();
      
contestentCount+=1

contestant.name = this.input.value();
contestant.answer = this.ans.value();

contestant.index = contestentCount

contestant.update();
contestant.updateCount(contestentCount);

 this.greeting.html("hello quiz solver : "+contestant.name);
 this.greeting.position(150,300);

 })

}



}

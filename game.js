// game variables
var character = document.getElementById("character");
var game = document.getElementById("game"); 
var interval;
//(the "both" variable will only allow the the if-loop to run once to avoid bugs)
var both = 0;
let moveBy = 1;
var door1;
var door2;
var door3;
var door4;
var door5;
var door6;
var door7;
var door8;
var door9;
var door10;



function startGame(){
   character;
   gameArea.start();
   door1 = new component(60, 120, "blue", 50, 120);
   door2 = new component(60, 120, "green", 150, 300);
   door3 = new component(60, 120, "orange", 450, 40);
   door4 = new component(60, 120, "purple", 600, 500);
   door5 = new component(60, 120, "magenta", 900, 70);
   door6 = new component(60, 120, "lightblue", 50, 650);
   door7 = new component(60, 120, "lightgreen", 420, 340);
   door8 = new component(60, 120, "aqua", 700, 200);
   door9 = new component(60, 120, "black", 850, 550);
   door10 = new component(60, 120, "brown", 310, 600);

}

var gameArea = {
   canvas : document.createElement("canvas"),
   start : function(){
      this.canvas.width = 1000;
      this.canvas.height = 800;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
   }
}

//object constructor (standard notation called "component")
function component(width, height, color, x, y){
   this.width = width;
   this.height = height; 
   this.x = x;
   this.y = y;
   ctx = gameArea.context;
   ctx.fillStyle = color;
   ctx.fillRect(this.x, this.y, this.width, this.height);
}

//start the game (it will start when the window loads)
window.addEventListener('load', () => {
   character.style.position = 'absolute';
   character.style.left = 0;
   character.style.top = 0;
});

//four functions (one for each arrow, tells what to do when each of the arrow keys are pressed)
function moveLeft(){
   var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
   if(left>0){
      character.style.left = left - moveBy + 'px';
   }
}
function moveRight(){
   var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
   if(left<960){
      character.style.left = parseInt(character.style.left) + moveBy + "px";
   }
}
function moveUp(){
   var top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
   if(top>0){
      character.style.top = parseInt(character.style.top) - moveBy + 'px';
   }
}
function moveDown(){
   var top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
   if(top<680){
      character.style.top = parseInt(character.style.top) + moveBy + 'px';
   }
}

//determine whether the arrow keys are being pressed
document.addEventListener("keydown", (event) => {
   collisionDetection()
   switch(event.key){
      case 'ArrowLeft':
         moveLeft();
         break;
      case 'ArrowRight':
         moveRight();
         break;
      case 'ArrowUp':
         moveUp();
         break;
      case 'ArrowDown':
         moveDown();
         break;
   }
});

// the object will keep travelling in the arrow direction pressed
document.addEventListener("keydown", event => {
   collisionDetection()

   if (both == 0) {
     both++;
     if(event.key==="ArrowLeft"){
        interval = setInterval(moveLeft, 1);
     }
     if(event.key==="ArrowRight"){
        interval = setInterval(moveRight, 1);
     }
     if(event.key==="ArrowUp"){
         interval = setInterval(moveUp, 1);
     }
     if(event.key==="ArrowDown"){
        interval = setInterval(moveDown, 1);
     }
  }
})
// to stop the object from travelling once the direction key is lifted
document.addEventListener("keyup", event => {
  collisionDetection()
  clearInterval(interval);
  both = 0;
})

function collisionDetection() {
   var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
   var top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
   // coordinates for character
   var characterCoordinate = [left, top];
   // coordinates for door 1
   var door1Coordinate = [door1.x, door1.y];
   var door1minX = door1Coordinate[0];
   var door1maxX = door1Coordinate[0] + door1.width;
   var door1minY = door1Coordinate[1];
   var door1maxY = door1Coordinate[1] + door1.height;
   // door1Range array: (min x, max x, min y, may y) - these four xy coordinates completely define the wall
   door1Range = [door1minX, door1maxX, door1minY, door1maxY];
   // coordinates for door 2
   var door2Coordinate = [door2.x, door2.y];
   var door2minX = door2Coordinate[0];
   var door2maxX = door2Coordinate[0] + door2.width;
   var door2minY = door2Coordinate[1];
   var door2maxY = door2Coordinate[1] + door2.height;
   door2Range = [door2minX, door2maxX, door2minY, door2maxY];
   // coordinates for door 3
   var door3Coordinate = [door3.x, door3.y];
   var door3minX = door3Coordinate[0];
   var door3maxX = door3Coordinate[0] + door3.width;
   var door3minY = door3Coordinate[1];
   var door3maxY = door3Coordinate[1] + door3.height;
   door3Range = [door3minX, door3maxX, door3minY, door3maxY];
   //coordinates for door 4
   var door4Coordinate = [door4.x, door4.y];
   var door4minX = door4Coordinate[0];
   var door4maxX = door4Coordinate[0] + door4.width;
   var door4minY = door4Coordinate[1];
   var door4maxY = door4Coordinate[1] + door4.height;
   door4Range = [door4minX, door4maxX, door4minY, door4maxY];
   // coordinates for door 5
   var door5Coordinate = [door5.x, door5.y];
   var door5minX = door5Coordinate[0];
   var door5maxX = door5Coordinate[0] + door5.width;
   var door5minY = door5Coordinate[1];
   var door5maxY = door5Coordinate[1] + door5.height;
   door5Range = [door5minX, door5maxX, door5minY, door5maxY];
   // coordinates for door 6
   var door6Coordinate = [door6.x, door6.y];
   var door6minX = door6Coordinate[0];
   var door6maxX = door6Coordinate[0] + door6.width;
   var door6minY = door6Coordinate[1];
   var door6maxY = door6Coordinate[1] + door6.height;
   door6Range = [door6minX, door6maxX, door6minY, door6maxY];
   // coordinates for door 7
   var door7Coordinate = [door7.x, door7.y];
   var door7minX = door7Coordinate[0];
   var door7maxX = door7Coordinate[0] + door7.width;
   var door7minY = door7Coordinate[1];
   var door7maxY = door7Coordinate[1] + door7.height;
   door7Range = [door7minX, door7maxX, door7minY, door7maxY];
   // coordinates for door 8
   var door8Coordinate = [door8.x, door8.y];
   var door8minX = door8Coordinate[0];
   var door8maxX = door8Coordinate[0] + door8.width;
   var door8minY = door8Coordinate[1];
   var door8maxY = door8Coordinate[1] + door8.height;
   door8Range = [door8minX, door8maxX, door8minY, door8maxY];
   // coordinates for door 9
   var door9Coordinate = [door9.x, door9.y];
   var door9minX = door9Coordinate[0];
   var door9maxX = door9Coordinate[0] + door9.width;
   var door9minY = door9Coordinate[1];
   var door9maxY = door9Coordinate[1] + door9.height;
   door9Range = [door9minX, door9maxX, door9minY, door9maxY];
   // coordinates for door 10
   var door10Coordinate = [door10.x, door10.y];
   var door10minX = door10Coordinate[0];
   var door10maxX = door10Coordinate[0] + door10.width;
   var door10minY = door10Coordinate[1];
   var door10maxY = door10Coordinate[1] + door10.height;
   door10Range = [door10minX, door10maxX, door10minY, door10maxY];
      
   /*if statement logic:
   - if the left characterCoordinate is farther right than the obstacle's minX 
   - if the characterCoordinate is farther left than the obstacle's maxX
   - ^these two statements imply the character is in between the obstacle's min and max width
   - if the characterCoordinate is closer to the bottom than the obstacle's minY
   - if the characterCoordinate is closer to the top than the obstacle's max Y
   - ^these two statements imply the character is between the obstacle's min and may height
   - THEN, the picture is crashing into the obstacle, and it is oh no 
   */
   //Venture Door ONE
   if (characterCoordinate[0] >= door1Range[0] && characterCoordinate[0] <= door1Range[1] && characterCoordinate[1] >= door1Range[2] && characterCoordinate[1] <= door1Range[3] ) {
      alert("You have opened a Venture Door ONE! Please select the correct answer for the new question below the game to continue on your EWB Venture!");
      // call the function that displays the question when the character opens a door
      displayQuestion1();
   }
   //Venture Door TWO
   if (characterCoordinate[0] >= door2Range[0] && characterCoordinate[0] <= door2Range[1] && characterCoordinate[1] >= door2Range[2] && characterCoordinate[1] <= door2Range[3]) {
      alert("You have opened a Venture Door TWO! Please select the correct answer for the new question below the game to continue on your EWB Venture!");
      displayQuestion2();
   }
   //Venture Door THREE
   if (characterCoordinate[0] >= door3Range[0] && characterCoordinate[0] <= door3Range[1] && characterCoordinate[1] >= door3Range[2] && characterCoordinate[1] <= door3Range[3]) {
      alert("You have opened a Venture Door THREE! Please select the correct answer for the new question below the game to continue on your EWB Venture!");
      displayQuestion3();
   }
   //Venture Door FOUR
   if (characterCoordinate[0] >= door4Range[0] && characterCoordinate[0] <= door4Range[1] && characterCoordinate[1] >= door4Range[2] && characterCoordinate[1] <= door4Range[3]) {
   alert("You have opened a Venture Door FOUR! Please select the correct answer for the new question below the game to continue on your EWB Venture!");
   displayQuestion4();
   }
   //Venture Door FIVE
   if (characterCoordinate[0] >= door5Range[0] && characterCoordinate[0] <= door5Range[1] && characterCoordinate[1] >= door5Range[2] && characterCoordinate[1] <= door5Range[3]) {
      alert("You have opened a Venture Door FIVE! Please select the correct answer for the new question below the game to continue on your EWB Venture!");
      displayQuestion5();
   }
   //Venture Door SIX
   if (characterCoordinate[0] >= door6Range[0] && characterCoordinate[0] <= door6Range[1] && characterCoordinate[1] >= door6Range[2] && characterCoordinate[1] <= door6Range[3]) {
      alert("You have opened a Venture Door SIX! Please select the correct answer for the new question below the game to continue on your EWB Venture!");
      displayQuestion6();
   }
   //Venture Door SEVEN
   if (characterCoordinate[0] >= door7Range[0] && characterCoordinate[0] <= door7Range[1] && characterCoordinate[1] >= door7Range[2] && characterCoordinate[1] <= door7Range[3]) {
      alert("You have opened a Venture Door SEVEN! Please select the correct answer for the new question below the game to continue on your EWB Venture!");
      displayQuestion7();
   }
   //Venture Door EIGHT
   if (characterCoordinate[0] >= door8Range[0] && characterCoordinate[0] <= door8Range[1] && characterCoordinate[1] >= door8Range[2] && characterCoordinate[1] <= door8Range[3]) {
      alert("You have opened a Venture Door EIGHT! Please select the correct answer for the new question below the game to continue on your EWB Venture!");
      displayQuestion8();
   }
   //Venture Door NINE
   if (characterCoordinate[0] >= door9Range[0] && characterCoordinate[0] <= door9Range[1] && characterCoordinate[1] >= door9Range[2] && characterCoordinate[1] <= door9Range[3]) {
      alert("You have opened a Venture Door NINE! Please select the correct answer for the new question below the game to continue on your EWB Venture!");
      displayQuestion9();
   }
   //Venture Door TEN
   if (characterCoordinate[0] >= door10Range[0] && characterCoordinate[0] <= door10Range[1] && characterCoordinate[1] >= door10Range[2] && characterCoordinate[1] <= door10Range[3]) {
      alert("You have opened a Venture Door TEN! Please select the correct answer for the new question below the game to continue on your EWB Venture!");
      displayQuestion10();
   }
}

// this function is called when the character enters a door
function displayQuestion1(){
   // variable to store the data of question. 2 sets of data: 4 radio inputs, 1 submit input. The 1 submit input calls the submitAnswer() function, which checks if the use selected the correct choice. Sidenote: This piece of code is sacred. 
   var data="<input type='radio' name='choice' value='poor'>Donating to the Poor<br>  <input type='radio' name='choice' value='gender'>Fighting for Gender Equality<br>  <input type='radio' name='choice' value='leaders'>Developing Systems Change Leaders<br>  <input type='radio' name='choice' value='None of These'>None of These<br>      <input type='submit' value='Submit Answer' onclick='submitAnswer1()'>";  
   document.getElementById('Question-1').innerHTML = "Venture Door ONE: <br> The three focuses of Engineers Without Borders Canada are: Transforming How Buisness is Done, Advocating for Better Policy, and _______."
   document.getElementById('Question-1-Options').innerHTML = data;  
   // changeDoorColour();
   changeDoor1Colour = new component(60, 120, "red", 50, 120);
}
var submitAnswer1 = function() {
   var radios = document.getElementsByName('choice');
   var val= "";
   for (var i = 0, length = radios.length; i < length; i++) {
       if (radios[i].checked) {
          val = radios[i].value; 
          break;
        }
   }
   if (val == "" ) {
     alert("please select an answer");
   } else if ( val == "leaders" ) {
     alert("Answer is correct!");
   } else {
     alert("Answer is wrong");
   }
 };

function displayQuestion2(){
   // variable to store the data of question. 2 sets of data: 4 radio inputs, 1 submit input. The 1 submit input calls the submitAnswer() function, which checks if the use selected the correct choice. Sidenote: This piece of code is sacred. 
   var data="<input type='checkbox' name='choice' value='understand'>understand the cause <br>  <input type='checkbox' name='choice' value='care'>care deeply <br>  <input type='checkbox' name='choice' value='protest'>protest wherever and whenever they want <br>  <input type='checkbox' name='choice' value='movement'>lead a movement aloud<br>  <input type='checkbox' name='choice' value='cancelculture'>take part in cancel culture <br>   <input type='submit' value='Submit Answer' onclick='submitAnswer2()'>";  
   document.getElementById('Question-2').innerHTML = "Venture Door TWO: According to EWB's definition of Advocacy, in order to advocate effectively, one must: _____, _____, and _____."
   document.getElementById('Question-2-Options').innerHTML = data;  
   changeDoor2Colour = new component(60, 120, "red", 150, 300);
}
/* HAVING TROUBLE WITH THE ARRAY NEEDED FOR SELECT ALL THAT APPLY - COME BACK TO THIS 
var submitAnswer2 = function() {
var checkbox = document.getElementsByName('choice');
var val = [];
val[0] = "";
for (var i = 0, length = checkbox.length; i < length; i++) {
      if (checkbox[i].checked) {
         val[i] = checkbox[i].value; 
         break;
      }
}
if (val[0] == "" ) {
   alert("please select an answer");
} 
else if ( val[0] == "understand" && val[1] == "care" && val[2] == "movement"){
   alert("Answer is correct!");
}
/*
else if ( vals == "care"&&"understand"&&"movement") {
   alert("Answer is correct!");
} 
*/

function displayQuestion4(){
   // variable to store the data of question. 2 sets of data: 4 radio inputs, 1 submit input. The 1 submit input calls the submitAnswer() function, which checks if the use selected the correct choice. Sidenote: This piece of code is sacred. 
   var data="<input type='radio' name='choice' value='1'>Internal, Small, and Large systems <br>  <input type='radio' name='choice' value='2'>Internal, Local, and Corporate systems <br>  <input type='radio' name='choice' value='3'>Children, Youth, and Senior Citizens <br>  <input type='radio' name='choice' value='4'>Rural, Suburban, and Urban Governments <br>  <input type='radio' name='choice' value='5'>Municipal, Provincial, and Federal Governments <br>   <input type='submit' value='Submit Answer' onclick='submitAnswer4()'>";  

   document.getElementById('Question-2').innerHTML = "Venture Door THREE: What are the three levels that EWB works with their members to invoke change?"
   document.getElementById('Question-2-Options').innerHTML = data;  
   changeDoor3Colour = new component(60, 120, "red", 450, 40);
}
function submitAnswer4(){
   var radios = document.getElementsByName('choice');
   var val= "";
   for (var i = 0, length = radios.length; i < length; i++) {
       if (radios[i].checked) {
          val = radios[i].value; 
          break;
        }
   }
   if (val == "" ) {
     alert("please select an answer");
   } else if ( val == 1 ) {
     alert("Answer is correct!");
   } else {
     alert("Answer is wrong");
   }
}




// make a score function 
// deduct scores or nah? this would be another function that deducts score if alert("Answer is wrong") is triggered










/* pseudocode 
Next Steps: 
- activate the questions when the door is opened 
- instead of alert function, call the function that displays the html text
- this function needs to be built 
- remember the function already calls submitAnswer()
- pause the game while answering (or make a html pop up that tells the user to answer the question before returning to the game
- keep track of which doors have been opened (score: increase when door open)
- change color of door when opened
- done



- there is a bug with the character getting stuck in the door... fix this

*/


// create two variables to access the character and block 

var character = document.getElementById("character");
var block = document.getElementById("block");

/* the leap function
- access the character's class list and add "animate"
- animate is what we described in css
- this function is initialized by the "onlick" at the top of the game.html file 
*/
function leap(){
   if(character.classList != "animate"){
      character.classList.add("animate");
   }
      setTimeout(function(){
         character.classList.remove("animate");
      },500);
}



var playerOne = document.querySelector("#player1"); //span in side h1
var playerTwo = document.querySelector("#player2"); //span inside h1
var p1 = document.querySelector("#p1");                     // button
var p2 = document.querySelector("#p2"); //button
var reset = document.querySelector("#Reset") //button
var input = document.querySelector("#input");        //input
var GameLimit = document.querySelector("#GameLimit") ;
var seewhowon = document.querySelector("#seewhowon");
var PlayerOneName = document.querySelector("#PlayerOneName");
var PlayerTwoName = document.querySelector("#PlayerTwoName");
var Start = document.querySelector("#Start");
// var Won =  pon +"Won";
var scorep1 = 0 ;
var scorep2 = 0 ;
var GameOver = false;
var winningScore = 5;
Start.addEventListener("click" , function(){
    var pon = prompt("Enter your Name as PlayerOneName");
    PlayerOneName.textContent =  pon;
    var ptn = prompt("Enter your Name as PlayerTwoName");
    PlayerTwoName.textContent =  ptn;


});

p1.addEventListener("click" , function(){
    // var give_your_name_as_playerOne = prompt("Give your name to the player");

   
    if(!GameOver){
        // console.log("this");
        scorep1++;
        if(scorep1 === winningScore){
            seewhowon.textContent =  "PlayerOne Won";
            
            // alert("GameOver!! player One has won");
            // playerOne.classList.add("winner");
            // playerOne.style.color = "pink";
            GameOver = true;
           
        }
        
        playerOne.textContent = scorep1;
        
    }

    
     
});



p2.addEventListener("click" , function(){
    if(!GameOver){
        scorep2++;
        if(scorep2===winningScore){
            // var SEEWHOWON = 
            seewhowon.textContent = "PlayerTwo Won";

            // alert("GameOver!! player two has won");
            seewhowon.classList.add("background");
            // playerOne.style.color = "pink"
            GameOver = true;
            
        }
        
        playerTwo.textContent = scorep2;
        
    }
    
    
});



// document.getElementById("myBtn").addEventListener("click", function() {
//     alert("Hello World!");
//   });
reset.addEventListener("click" , function(){
    
    // scorep1 = 0;
    // scorep2 = 0;
    // playerOne.textContent = scorep1 ;
    // playerTwo.textContent = scorep2 ;
    // location.reload();



});
input.addEventListener("change" , function(){

    GameLimit.textContent = input.value
    winningScore = Number(input.value);

 });
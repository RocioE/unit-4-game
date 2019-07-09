//game consists of 4 crystals
//every crystal has a new random number between 1-12
// a new random number will be automated everytime player wins or loses
//when clicking any crystal, it adds the previous number
//until it equals a total score
//if it is greater than the random number result, game starts starts over
//if it is equal, then player wins

var random_result= Math.floor(Math.random()*(120-19+1)+19);
console.log(random_result)


var resetAndStart;
var random; 
var lostCount= 0;
var winCount= 0;
var totalScore= 0;
var lostDOMRef= $("#lose");
var winDOMRef= $("#win");


//is DOM is getting ref of DOM element with ID randomNumber
// then reseting the text of the ID randomNumber to are variable random_results
$("#randomNumber").text(random_result);
$("#score").text(totalScore);


$("#crystalblue").click(function(){
    console.log("blue crystal")
    totalScore += 5;
    console.log(totalScore)
    $("#score").text(totalScore);
    if (random_result == totalScore){
        console.log("youWon")
        winCount++ 
        winDOMRef.text(winCount)
        random_result= Math.floor(Math.random()*(120-19+1)+19);  //this recalculates the random number//
        $("#randomNumber").text(random_result);
        totalScore= 0; 
        $("#score").text(totalScore);
        

    }
    if (totalScore > random_result){
        console.log("youlost")
        lostCount++ //increment to increase # of losses//
        lostDOMRef.text(lostCount)
        random_result= Math.floor(Math.random()*(120-19+1)+19);
        $("#randomNumber").text(random_result);
        
    }

})

$("#crystalpurple").click(function(){
 console.log("crystalpurple")
    totalScore+= 7
    console.log(totalScore)
    $("#score").text(totalScore);

    if (random_result === totalScore){
        console.log("youWon")
        winCount++ 
        winDOMRef.text(winCount)
        random_result= Math.floor(Math.random()*(120-19+1)+19);  //this recalculates the random number//
        $("#randomNumber").text(random_result);
        totalScore= 0; 
        $("#score").text(totalScore);

    }
    if (totalScore > random_result){
        console.log("youlost")
        lostCount++ //increment to increase # of losses//
        lostDOMRef.text(lostCount)
    }
})

$("#crystalspink").click(function(){
    console.log("crystalpink")
    totalScore += 9
    console.log(totalScore)
    $("#score").text(totalScore);

    if (random_result === totalScore){
        console.log("youWon")
        winCount++ 
        winDOMRef.text(winCount)
        random_result= Math.floor(Math.random()*(120-19+1)+19);  //this recalculates the random number//
        $("#randomNumber").text(random_result);
        totalScore= 0; 
        $("#score").text(totalScore);

    }
    if (totalScore > random_result){
        console.log("youlost")
        lostCount++ //increment to increase # of losses//
        lostDOMRef.text(lostCount)
    }
})

$("#crystalwhite").click(function(){
    console.log("crystalwhite")
    totalScore += 13
    console.log(totalScore)
    $("#score").text(totalScore);

    if (random_result === totalScore){
        console.log("youWon")
        winCount++ 
        winDOMRef.text(winCount)
        random_result= Math.floor(Math.random()*(120-19+1)+19);  //this recalculates the random number//
        $("#randomNumber").text(random_result);
        totalScore= 0; 
        $("#score").text(totalScore);

    }
    if (totalScore > random_result){
        console.log("youlost")
        lostCount++ //increment to increase # of losses//
        lostDOMRef.text(lostCount)
    }
})




var resetAndStart = function() {  // this will start the game///

    random_result = Math.floor(Math.random() * 101) + 19;


    $("#result").html('Random Result: ' + random_result);
 
//there are 4 crystals, each will be given a value. Each crystal will be given a class id#
//create loop
    for(var i = 0; i < 4; i++){
        var random_result = getRandomInt( 1,12);
            function getRandomInt(min, max) { return Math.min( max, Math.floor(Math.random() * (max - min + 1) + min) ); 
            } //!this is the hidden value per crystal

        var crystal= $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random  //"random" in all where it is stated 
            });

            crystal.html(random);

        $(".crystals").append(crystal);

    }

}

// resetAndStart();

$(".crystal").on('click', function () {
   
    var num = parseInt($(this).attr('data-random'));
    previous += num;

    if (previous > random_result){
        lost--;
        console.log("You Lose!");
        $("#lost").html(win);

    }
    else if (previous == random_result){
        win++;
        console.log("You Win!");
        $("#win").html(win);

    }


});


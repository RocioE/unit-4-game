
//game consists of 4 crystals
//every crystal has a new random number between 1-12
// a new random number will be automated everytime player wins or loses
//when clicking any crystal, it adds the previous number
//until it equals a total score
//if it is greater than the random number result, game starts starts over
//if it is equal, then player wins

var random_result;
var lost= 0;
var win= 0;

var resetAndStart = function(){  // this will start the game///

random_result = Math.floor(Math.random() * 102) + 19;


$("#result").html('Random Result: ' + random_result);
 
//there are 4 crystals, each will be given a value. Each crystal will be given a class id#
//create loop
for(var i = 0; i < 4; i++){
    var random_result = getRandomInt( 1,12);
         function getRandomInt(min, max) { return Math.min( max, Math.floor(Math.random() * (max - min + 1) + min) ); } //!this is the hidden value per crystal

    var crystal= $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random  //"random" in all where it is stated 
        });

        crystal.html(random);

    $(".crystals").append(crystal);

    }
}

resetAndStart();

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



// NOTE: The Matrix rain code is not my code and was adopted from https://code.sololearn.com/Wj7ZWBg5m2OG/#html This is used for the background effects for this homework.
//setting the canvas by id c
var c = document.getElementById("c");
var ctx = c.getContext("2d");
var fromCharCode = '';

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;

//chinese characters - taken from the unicode charset
var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%JAVASCRIPT";
//converting the string into an array of single characters
//for (var i = 0x30A0; i <= 0x30A0+96; i++){
// var matrix = String.fromCharCode('');
//}


matrix = matrix.split("");

var font_size = 10;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = 1;

//drawing the characters
function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0"; //green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for (var i = 0; i < drops.length; i++) {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
    }
}

setInterval(draw, 90);

/**************************************************/
//              My own code starts here.          //
/*************************************************/
$(document).ready(function () {
    gameRun = 0;
    //hideSubmitBtn();
    reset();
    $("#start-tab").on("click", gameStart)


function gameStart() {
    gameRun = 1;
    showSubmitBtn();
    numberOfQuestions = 6;
    score = 0;
    missed = 6;
    var count = 10;
    var timer;
    timer = setInterval(countDown, 1000);
    function countDown() {
        count--;
        $("#timer").html(count + " sec");
        if (count == 0) {
            clearInterval(timer);
            validate();
        }
        console.log(timer);
    }
}

    $("#submit-answers").on("click", validate);

function reset() {
    gameRun = 0;
    hideSubmitBtn();
    score = 0;
    missed = 0;
}

function validate() {
    clearInterval(timer);
    numberOfQuestions = 6;
    var score = 0;
    var missed = 0;
    hideSubmitBtn();
    //$("#submit-answers").hide();//hides the submit button when time is out
    var x = document.forms["triviaReloaded"]["q1"].value;
    var y = document.forms["triviaReloaded"]["q2"].value;
    var z = document.forms["triviaReloaded"]["q3"].value;
    var xx = document.forms["triviaReloaded"]["q4"].value;
    var yy = document.forms["triviaReloaded"]["q5"].value;
    var zz = document.forms["triviaReloaded"]["q6"].value;

    if (x == null || x == '') {
        //alert("you missed a question 1");
        missed++;
    } else if (x == "d") {
        score++;
        console.log("score =" + score);
    }
    if (y == null || y == '') {
        //alert("you missed a question 2 ");
        missed++;
    } else if (y == "c") {
        score++;
        console.log("score =" + score);
    }
    if (z == null || z == '') {
        //alert("you missed a question 3 ");
        missed++;
    } else if (z == "d") {
        score++;
        console.log("score =" + score);
    }
    if (xx == null || xx == '') {
        //alert("you missed a question 4 ");
        missed++;
    } else if (xx == "c") {
        score++;
        console.log("score =" + score);
    }
    if (yy == null || yy == '') {
        //alert("you missed a question 5 ");
        missed++;
    } else if (yy == "d") {
        score++;
        console.log("score =" + score);
    }
    if (zz == null || zz == '') {
        //alert("you missed a question 6 ");
        missed++;
    } else if (zz == "c") {
        score++;
        console.log("score =" + score);
    }
    console.log("score =" + score);
    console.log("missed = " + missed);
    $("#nscore").text(score);
    $("#missed").text(missed);
}
function hideSubmitBtn() {
    $("#submit-answers").hide();
}

function showSubmitBtn() {
    // if(gamerun === 1) {}
    $("#submit-answers").show();
}

});




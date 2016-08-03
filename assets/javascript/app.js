
var number = 61;
var counter;
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct =0;
var questions = [
	["How many championship rings does Kobe Bryant have?","3","4","5","6","C"],
	["The popular style of game play adapted by the Lakers that was ushered in by Magic Johnson was known as what?","Pick and Roll","Showtime","Lob City","Small Ball","B"],
	["How many championships did the famous 'one-two punch' of Kobe Bryant and Shaquille O'Neal win in their time together?","0","2","3","5","C"],
	["How many retired Laker jerseys are hanging in Staples Center?","5","8","9","12","C"],
	["Who's nickname was 'The Captain'?","Kareem Abdul-Jabbar","Shaquille O'Neal","Magic Johnson","Kobe Bryant","A"],
	["Who on the lakers scored 100 points in a single game?","Elgin Baylor","Jerry West","Kobe Bryant","Wilt Chamberlain","D"],
	["What was the Lakers first hometown?","Los Angeles","Minneapolis","San Diego","Sacramento","B"],
	["What year did the Lakers acquire Kobe Byrant?","1991","1996","1999","2001","B"],
	["What was Kobe Bryant's jersey number before he changed it to 24?","1","23","10","8","D"],
	["Who is the Lakers current head coach?","Luke Walton","Bryon Scott","Phil Jackson","Pat Riley","A"],
	["Who did Kobe Bryant play against when he scored 81 points?","Boston Celtics","New York Knicks","Los Angeles Clippers","Torronto Raptors","D"],
	["Who were the Lakers two #2 picks in the draft?","D'Angelo Russell, Brandon Ingram","Brandon Ingram, Jordan Clarkson","Julius Randle, Jordan Clarkson","Julius Randle, D'Angelo Russell","A"]

];

function run(){
    counter = setInterval(decrement, 1000);
    if (number === 0){
    // ...run the stop function.
    	stop();
    }
}

// The decremeent function.
function decrement(){
// Decrease number by one.
    number--;
    // Show the number in the #show-number tag.
    $('#show-number').html('<h2>Time Left: ' + number + '</h2>');
    // Once number hits zero...
    if (number === 0){
    // ...run the stop function.
        stop();
        $("#test_status").html("Test is over.");
        $('#test').html("<h2>You got " + correct + " of " + questions.length + " questions correct.</h2>");
        // Alert the user that time is up.
        alert('Time Up!');
    }
}

function stop(){
	clearInterval(counter);
}

function quiz(x){
	return document.getElementById(x);
}
function renderQuestion() {
	test = quiz("test");
	if(pos >= questions.length){
		$('#test').html("<h2>You got " + correct + " of " + questions.length + " questions correct.</h2>");
		$("#test_status").html("Test Completed");
		stop();
		pos = 0;
		correct = 0;
		return false;
		//shows results of quiz, how many you got correct out of the total number of questions
	}
	$('#test_status').html("Question " + (pos+1) + " of " + questions.length);
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	chD = questions[pos][4];
	$('#test').html("<h3>" + question + "</h3>");
	$('#test').append("<input type= 'radio' name= 'choices' value= 'A'>" + chA + "<br>" + "<input type= 'radio' name= 'choices' value= 'B'>" + chB + "<br>" + "<input type= 'radio' name= 'choices' value= 'C'>" + chC + "<br>" + "<input type= 'radio' name= 'choices' value= 'D'>" + chD + "<br><br>");
	$('#test').append("<button onclick=' checkAnswer()'>Submit</button>");
	//outputs the questions in an unordered list with radio buttons and all of the answer choices
}
function checkAnswer(){
	var choices = document.getElementsByName("choices");
	for (var i = 0; i < choices.length; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}
	if (choice == questions[pos][5]) {
		correct++;//checks to see if the chosen answer is the correct answer
	}
	pos++;
	renderQuestion();
	//clearInterval(counter);
}

$(document).ready(function() {
	quiz();
	renderQuestion();
	run();
});


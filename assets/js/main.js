var difficulty;
var questionNumber = 1;
var operations = [];

function setDifficulty(diff) {
  $('#main').hide();
  $('#operations').fadeIn(1000);
  difficulty = diff;
}


$('#play-button').click(function(clicked) {
  $('input:checked').each(function() {
    operations.push(this.value);
  });
  if (operations.length === 0) {
    // e.preventDefault();
    $('#warning').show().text('Please choose at least 1 operator.');
  } else {
    $('#operations').hide();
    $('#play-game').fadeIn(1000);
    playRound();
  }
});

function playRound() {
  if questionNumber > 10 {
    finishGame(); //unimplemented
  } else {
    var operator = getRandomOperator(); // unimplemented
    var operands = getOperands(operator); // unimplemented
    $('.question-num').html(questionNumber);
    $('#number1').html(operands[0]);
    $('#number2').html(operands[1]);
    $('#operator').html(operator);
  }
}

function scoreRound() {
  // figure out if they got it right or not...
  // provide some feedback and...
  playRound();
}

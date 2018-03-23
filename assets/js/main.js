var difficulty;
var score = 0;
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

function getRandomOperator() {
  return operations[Math.floor(Math.random() * operations.length)];
};
function getOperands(operator) {
  switch (operator) {
    case '+':
      return [1 + Math.floor(Math.random() * 20), 1 + Math.floor(Math.random() * 20)];
      break;
    default:
  }
}
function finishGame() {
  $('#number-correct').html(8);
  $('#play-game').hide()
  $('#results').fadeIn(1000)
}
function playRound() {
  if (questionNumber > 10) {
    finishGame(); //unimplemented
  } else {
    var operator = getRandomOperator();
    var operands =  getOperands(operator); // implementing
    $('.question-num').html(questionNumber);
    $('#number1').html(operands[0]);
    $('#number2').html(operands[1]);
    $('#operator').html(operator);
  }
}

function scoreRound() {
  var operator = $('#operator').text();
  var isCorrect = Number($('#number1').text()) + operator + Number($('#number2').text());
  console.log(isCorrect);
  // provide some feedback and...
  questionNumber++;
  playRound();
}

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
    case '-':
      return [1 + Math.floor(Math.random() * 20), 1 + Math.floor(Math.random() * 20)];
      break;
    case '*':
      return [1 + Math.floor(Math.random() * 20), 1 + Math.floor(Math.random() * 20)];
      break;
    case '/':
      return [1 + Math.floor(Math.random() * 20), 1 + Math.floor(Math.random() * 20)];
      break;
    default:
  }
}
function finishGame() {
  $('#number-correct').html(score);
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
  var operator = $('#operator').html();
  var num1 = $('#number1').html();
  var num2 = $('#number2').html();
  var guess = $('#guess').val();
  var exp = `${num1} ${operator} ${num2}`;
  console.log(exp);
  var isCorrect = eval(exp) === Number(guess);
  console.log(isCorrect);
  $('#is-right').show();
  if (isCorrect) {
    $('#is-right').removeClass('incorrect');
    $('#is-right').addClass('correct').text('Yay!!!');
    score++;
  } else {
    $('#is-right').removeClass('correct');
    $('#is-right').addClass('incorrect').text(`The answer is ${eval(exp)}`)
  }
  questionNumber++;
  playRound();
}

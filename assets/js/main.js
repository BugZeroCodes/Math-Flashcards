var difficulty;
var score = 0;
var questionNumber = 1;
var operations = [];
var records = [];

function setDifficulty(diff) {
  $('#main').hide();
  $('#operations').fadeIn(1000);
  difficulty = diff;
}

$('form').submit(function(e) {
  e.preventDefault();
  scoreRound();
})
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
    var lowerBound, upperBound;
    if (difficulty === 'easy') {
      upperBound = 20;
      lowerBound = 1;
    } else if (difficulty === 'medium') {
      upperBound = 30;
      lowerBound = 10;
    } else {
      upperBound = 90;
      lowerBound = 40;
    }
      return [lowerBound + Math.floor(Math.random() * upperBound), lowerBound + Math.floor(Math.random() * upperBound)];
      break;
    case '-':
    if (difficulty === 'easy') {
      upperBound = 20;
      lowerBound = 1;
    } else if (difficulty === 'medium') {
      upperBound = 30;
      lowerBound = 10;
    } else {
      upperBound = 90;
      lowerBound = 40;
    }
      var array = [lowerBound + Math.floor(Math.random() * upperBound),
         lowerBound + Math.floor(Math.random() * upperBound)];
      if (array[0] > array[1]) {
        return array;
      } else {
        return array.reverse();
      }
      break;
    case '*':
    if (difficulty === 'easy') {
      upperBound = 12;
      lowerBound = 1;
    } else if (difficulty === 'medium') {
      upperBound = 20;
      lowerBound = 3;
    } else {
      upperBound = 30;
      lowerBound = 3;
    }
      return [lowerBound + Math.floor(Math.random() * upperBound),
         1 + Math.floor(Math.random() * upperBound)];
      break;
    case '/':
    do {
      if (difficulty === 'easy') {
        upperBound = 144;
        lowerBound = 1;
      } else if (difficulty === 'medium') {
        upperBound = 200;
        lowerBound = 2;
      } else {
        upperBound = 300;
        lowerBound = 2;
      }
      array = [lowerBound + Math.floor(Math.random() * upperBound),
         lowerBound + Math.floor(Math.random() * upperBound / 2)];
      if (array[1] > array[0]) {
        array = array.reverse();
      }
    } while ((array[0] % array[1] !== 0) || (array[0] / array[1] > 12));
  return array;
  break;
  default:
  }
}
function finishGame() {
  $('#number-correct').html(score);
  $('#play-game').hide();
  $('#results').fadeIn(1000);
}
function playRound() {
  if (questionNumber > 10) {
    finishGame();
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
  var isCorrect = eval(exp) === Number(guess);
  records.push({correct: isCorrect, equation: exp})
  console.log(records);
  $('#is-right').show();
  if (isCorrect) {
    $('#is-right').removeClass('incorrect');
    $('#is-right').addClass('correct').text('Yay!!!');
    score++;
  } else {
    $('#is-right').removeClass('correct').addClass('incorrect').text(
      `The answer is ${eval(exp)}`);
  }
  questionNumber++;
  playRound();
  $('#guess').val('');
}

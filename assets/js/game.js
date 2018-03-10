var round;
var parameters = decodeURIComponent(document.location.search).replace(/(^\?)/,'').split("&").map(
  function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
$(document).ready(function() {
  round = 1;
  update();
})
function update() {
  $('.question-num').text(round);
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var operators = parameters.operations.split(',');
  var num1 = numbers[Math.floor(Math.random() * numbers.length)];
  var num2 = numbers[Math.floor(Math.random() * numbers.length)];
  var operator = operators[Math.floor(Math.random() * operators.length)];
  $('#number1').text(num1);
  $('#number2').text(num2);
  $('#operator').text(operator);
}

var difficulty;
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
  }
});

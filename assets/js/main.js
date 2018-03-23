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
  $('#operations').hide();
  $('#play-game').fadeIn(1000);
});

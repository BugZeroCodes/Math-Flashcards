function getDifficulty() {
  var queryString = window.location.search.substring(1);
  return queryString;
}
$('#play-button').click(function(clicked) {
  var difficulty = getDifficulty();
  var operations = [];
  $('input:checked').each;
});

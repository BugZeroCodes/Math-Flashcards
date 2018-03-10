function getDifficulty() {
  var queryString = window.location.search.substring(1);
  return queryString.split('=')[1];
}
$('#play-button').click(function(clicked) {
  var operations = [];
  $('input:checked').each(function() {
    operations.push(this.value);
  });
  var params = {};
  params['difficulty'] = getDifficulty();
  params['operations'] = operations;
  console.log(params);
  var stringParams = jQuery.param(params);
  console.log(stringParams);
});

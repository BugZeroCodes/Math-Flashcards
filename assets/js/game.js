$(document).ready(function() {
  var parameters = decodeURIComponent(document.location.search).replace(/(^\?)/,'').split("&").map(
    function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
    console.log(parameters['operations[]']);
})

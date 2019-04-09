$(document).ready(function() {
  // $('h1').css('color', 'white');
  $('#number5').click(function() {
    $('#number5').css('color', 'white');
    $('#song-5').toggleClass('black');
  });
  $('#number4').click(function() {
    $('#number4').css('color', 'pink');
    $('#song-4').toggleClass('grey');
  });
  $('#number3').click(function() {
    $('#number3').css('color', 'black');
    $('#song-3').toggleClass('slateblue');
  });
  $('#number2').click(function() {
    $('#number2').css('color', 'salmon');
    $('#song-2').toggleClass('tomato');

});
  $('#number1').click(function() {
    $('#number1').css('color', 'pink');
    $('#song-1').toggleClass('lime');
  });
});

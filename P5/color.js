$(document).ready(function() {

    // run function on initial page load

    $('#pignose').click(function() {
       colorGuess();

    });


});

function colorGuess() {
  var colorArray = ["#ff1d82", "#ffb6da","#FFC0CB","#FFB6C1","#FF69B4","#FF1493","#DB7093","#C71585","#FF00FF","#CD5C5C","#F08080","#FA8072","#E9967A","#FFA07A","#DC143C","#BC8F8F","#FF7F50","#C71585","#FFDAB9","#D8BFD8","#DDA0DD","#EE82EE","#DA70D6","#FF00FF","#BA55D3","#8B008B","#FFE4E1"];
  var randomNumber = Math.floor(Math.random() * colorArray.length);
  $('body').css('background-color', colorArray[randomNumber]);
}

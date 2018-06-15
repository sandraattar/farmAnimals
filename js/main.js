$(document).ready( function(){

var bodyWidth = document.body.clientWidth;
var bodyHeight = document.body.clientHeight;
var $catSound = $("#catSound")[0];
var $dogSound = $("#dogSound")[0];
var $cowSound = $("#cowSound")[0];

$dogSound.play();
$cowSound.play();

$("#cat").on('click',function(){

  var randPosX = Math.floor((Math.random() * bodyWidth));
  var randPosY = Math.floor((Math.random() * bodyHeight));

  console.log(randPosY);
  $('#cat').css('left', randPosX);
  $('#cat').css('top', randPosY);

  $catSound.play();

});

$("#dog").on('click',function(){

  var randPosX = Math.floor((Math.random() * bodyWidth));
  var randPosY = Math.floor((Math.random() * bodyHeight));

  console.log(randPosY);
  $('#dog').css('left', randPosX);
  $('#dog').css('top', randPosY);

  $dogSound.play();

});

$("#cow").on('click',function(){

  var randPosX = Math.floor((Math.random() * bodyWidth));
  var randPosY = Math.floor((Math.random() * bodyHeight));

  console.log(randPosY);
  $('#cow').css('left', randPosX);
  $('#cow').css('top', randPosY);

  $cowSound.play();

});

});

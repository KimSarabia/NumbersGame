'use strict';

var sum = 0;
  var turns = 10;
var gameOn;
$(document).ready(init);

function init(){
  sum = 0;
  turns = 10;
  gameOn= true;
  $('.num').click(clickNum); //
  $('body').ready(randomNum);
  $('#submit').click(submitAnswer);
  $('#roll').click(rollRefresh);
  $('#newGame').click(resetGame);
}

function randomNum(){
  if (gameOn === true) {
  var randNum = Math.floor(Math.random() * 9) + 1;
  console.log('randNum: ', randNum);
  var $stars = [];
  for(var i = 0; i < randNum; i++){
    var $newCup = $('<div>').addClass('star');
    $stars.push($newCup);
  }
  $('#randomNums').append($stars);}
}

function clickNum(){
  if (gameOn === true){
  var $this = $(this);
  var num = $(this).text();
  var wasSelected = $this.hasClass('selected');
  $this.removeClass('selected');
  if(!wasSelected){
    $this.addClass('selected');
  }}
}

function submitAnswer(){
     if (gameOn === true) {
  var starLength = $('.star').length;
  $('.selected').each(function(index, element){
    sum = 0;
    sum = sum + parseInt(element.innerHTML);
  })
  
  if(starLength === sum) {
    $('#messages').empty();
    $('#messages').text('Awesome!');
    $('.selected').each(function(index, element){
      element.classList.add('disabled');
      element.classList.remove('selected');
    })
    $('.disabled').off();
    $('#randomNums').empty();
    randomNum();
    var disabledNums = $('.disabled').length;
    if(disabledNums === 9){
      $('#messages').empty();
      $('#messages').text('Hey you got it!').addClass('winner');
    }
  } else {
    $('#messages').empty();
    $('#messages').text('Wrong, try again!');
  }}
}

function rollRefresh(){
   if (gameOn === true) {
    turns = turns - 1;
    console.log('click');
  $('#rollChances').text();
  $('#randomNums').empty();
  randomNum();
  $('#rollChances').text(turns);
  if (turns === 0) {
    gameOn = false;

  }}
}

function resetGame(){
  $('#randomNums').empty();
  randomNum();
  turns = 10;

  $('.num').off();
  $('.num').click(clickNum);
  $('.num').removeClass('disabled selected');
  $('#messages').empty().removeClass('winner');
  $('#rollChances').text(turns);
 gameOn = true;

}
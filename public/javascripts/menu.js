/*$(document).ready(function() {
  $('.pour') //Pour Me Another Drink, Bartender!
    .delay(2000)
    .animate({
      height: '360px'
      }, 1500)
    .delay(1600)
    .slideUp(500);
  
  $('#liquid') // I Said Fill 'Er Up!
    .delay(3400)
    .animate({
      height: '170px'
    }, 2500);
  
  $('.beer-foam') // Keep that Foam Rollin' Toward the Top! Yahooo!
    .delay(3400)
    .animate({
      bottom: '200px'
      }, 2500);
  });*/

document.addEventListener("DOMContentLoaded", function() {
  debugger;
  var bubbles = document.getElementsByClassName('bubble');
  for(var i = 0, len = bubbles.length; i < len; i++){
    bubbleUp(bubbles[i], i);
  }

  var foam = document.querySelectorAll('div[class^="foam-"]');
  for(var i = 0, len = foam.length; i < len; i++){
    bubbleUp(foam[i], 1);
  }
});

function bubbleUp(el, index){
  var beg = parseInt(getComputedStyle(el).bottom);
  var end = beg + 300;
  setTimeout(function(){
    var cur = parseInt(getComputedStyle(el).bottom);
    if(cur < end){
      var rand = (Math.random * (5 - index)) + index;
      el.style.bottom = cur + rand + "px";
      bubbleUp(el, index);
    }
  });
}
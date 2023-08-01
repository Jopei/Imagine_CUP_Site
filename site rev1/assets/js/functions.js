$(document).ready(function() {
    typeEffect("#h1-title-effect", 100);



})



function typeEffect(element, speed) {
  var text = $(element).text();
  $(element).html("");

  var i = 0;
  var timer = setInterval(function() {
    if (i < text.length) {
      $(element).append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

function anime(param) {
    var element = param.targets;
    var translateX = param.translateX;
    var skewY = param.skewY;
    var duration = param.duration;
    var direction = param.direction;
    var loop = param.loop;

    $(element).css({
        "transform": "translateX(0px) skewY(0deg)"
    });

    $(element).animate({
        "transform": "translateX(" + translateX + "px) skewY(" + skewY + "deg)"
    }, duration, direction, function() {
        if (loop) {
        anime(element);
        }
    });
}

//função que faça a animação de translate e skew em y do elemento em loop


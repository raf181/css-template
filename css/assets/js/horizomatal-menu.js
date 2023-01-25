var menu = document.querySelector('.menu');
var leftButton = document.querySelector('.left-button');
var rightButton = document.querySelector('.right-button');

leftButton.addEventListener('click', function() {
  var currentTranslate = getTranslateX();
  if (currentTranslate < 0) {
    setTranslateX(currentTranslate + 300);
  }
});

rightButton.addEventListener('click', function() {
  var currentTranslate = getTranslateX();
  if (currentTranslate > -(menu.offsetWidth - 300)) {
    setTranslateX(currentTranslate - 300);
  }
});

function getTranslateX() {
  var style = window.getComputedStyle(menu);
  var matrix = new WebKitCSSMatrix(style.webkitTransform);
  return matrix.m41;
}

function setTranslateX(translateX) {
  menu.style.webkitTransform = 'translateX(' + translateX + 'px)';
  menu.style.transform = 'translateX(' + translateX + 'px)';
}
const $bigBall = document.querySelector('.bigball');
const $smallBall = document.querySelector('.smallball');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {if (window.CP.shouldStopExecution(0)) break;
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
window.CP.exitedLoop(0);function onMouseMove(e) {
  TweenMax.to($bigball, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15 });

  TweenMax.to($smallball, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7 });

}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigball, .3, {
    scale: 4 });

}
function onMouseHoverOut() {
  TweenMax.to($bigball, .3, {
    scale: 1 });

}
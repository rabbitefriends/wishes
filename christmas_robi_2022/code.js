// First Call to define "parchment" height
document.onload = ScrollHeight();

// Redraw when viewport is modified
window.addEventListener('resize', function(event){
  ScrollHeight();
});


function ScrollHeight() {
  var content = document.querySelector('#parchment');
  var container = document.querySelector('#contain');

  // SVG feTurbulence can modify all others elements, fo this reason "parchment" is in another <div> and in absolute position.
  // so for a better effect, absolute height is defined by his content.
  content.style.height = container.offsetHeight + 'px';
}
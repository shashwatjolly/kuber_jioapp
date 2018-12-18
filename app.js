var user;
var currentIndex;
var selectable='.items';
window.addEventListener("load", function() {
  currentIndex = 0;
  nav(0);

});

window.addEventListener("keydown", handleKeyDown)

function handleKeyDown(e) {
	console.log("Yo");
  switch(e.key) {
    case 'ArrowUp':
      nav(-1);
      break;
    case 'ArrowDown':
      nav(1);
      break;
    case 'ArrowRight':
      nav(1);
      break;
    case 'ArrowLeft': 
      nav(-1);
      break;
  }
}

function func () {
	selectable='.selitems';
	console.log("triggered");
	// currentIndex = 0;
    // clickTarget = document.getElementById('click-target');
	// window.removeEventListener("keydown", handleKeyDown);
}


function nav (move) {
  var next = currentIndex + move;
  var items = document.querySelectorAll(selectable);
  var targetElement = items[next];
  currentIndex = next;
  targetElement.focus();
}
var buttons = document.querySelectorAll("button.drum");
//console.log(buttons);

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    makeSound(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  //  console.log(event);
  makeSound(event.key);
});

function makeSound(key) {
  //  console.log(key);
  addAnimation(key);
  switch (key) {
    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    default:
      console.log(key);

  }
}

function addAnimation(key) {
  var button = document.querySelector("." + key);
  //  console.log("Animation---> "+key+" "+button.classList);
  button.classList.add("pressed");
  //  console.log("Animation2---> "+key+" "+button.classList);
  setTimeout(function() {
    button.classList.remove("pressed");
    //    console.log("Animation3---> "+key+" "+button.classList);
  }, 300);
}

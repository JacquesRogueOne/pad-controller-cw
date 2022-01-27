const BASE_URL = "https://raw.githubusercontent.com/anilrayamajhi/padControllers/master/sounds/sounds";

const sounds = Object.values(document.querySelectorAll('.push-pad'))
    .map( element => (element.id))
    .map( elementId => ({ id: elementId, sound: new Audio(`./sounds/${elementId}.wav`) }))
    .reduce((acc, current) => ({ ...acc, [current.id]: current.sound }), {});

$('body').on("keypress", function(e) {
  e.preventDefault();
  e = e || window.event;
  const audio = new Audio(`${BASE_URL}/${e.keyCode}.wav`);
  audio.play();
  $(`#pad-${e.keyCode}`).fadeOut(20).fadeIn(20);
});

$('body').on("click", '.key-pad', function(e) {
  e = e || window.event;
  const id = $(this).attr('id');
  const keyCode = id.split("-")[1];
  const audio = new Audio(`${BASE_URL}/${keyCode}.wav`);
  audio.play();
  $(`#pad-${keyCode}`).fadeOut(20).fadeIn(20);
});

let audioSound;

$('body').on("click", '.push-pad', function(e) {
  e = e || window.event;
  const id = $(this).attr('id');
  audioSound?.pause();
  audioSound = sounds[id];
  audioSound.play();
  $(`#${id}`).fadeOut(20).fadeIn(20);
});

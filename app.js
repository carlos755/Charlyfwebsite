const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle");

    modeToggle.addEventListener("click"  , ()  =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
    });

var player = document.getElementById('player');
var songs = [
  'audio/Chalino.mp3',
  'audio/Zutano (En Vivo).mp3',
  'audio/El Mochitense.mp3',
];
var currentIndex = 0;

player.src = songs[currentIndex];
player.play();

player.addEventListener('ended', function() {
  currentIndex++;
  if (currentIndex === songs.length) {
    currentIndex = 0;
  }
  player.src = songs[currentIndex];
  player.play();
});

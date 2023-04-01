window.addEventListener('load', function() {
    var loader = document.getElementById('loader');
    loader.style.display = 'none';
  });
  window.addEventListener('load', function() {
    var loader = document.getElementById('loader-text');
    loader.style.display = 'none';
  });
window.addEventListener('load', function() {
    var loader = document.getElementById('loader-container');
    loader.style.display = 'none';
  });
  var canciones = ["cancion1", "cancion2", "cancion3"];
  var indiceActual = 0;
  cancion1.volume = 0.2;
  cancion2.volume = 0.2;
  cancion3.volume = 0.2;
  var audio = document.getElementById(canciones[indiceActual]);
  
  function playAudio() {
    audio.play();
  }
  
  function pauseAudio() {
    audio.pause();
  }
  
  function nextAudio() {
    indiceActual++;
    if (indiceActual >= canciones.length) {
      indiceActual = 0;
    }
    audio.pause();
    audio = document.getElementById(canciones[indiceActual]);
    audio.currentTime = 0;
    audio.play();
  }
  var song1 = document.getElementById("cancion1");
  var song2 = document.getElementById("cancion2");
  var song3 = document.getElementById("cancion3");
  
  song1.addEventListener('ended', function() {
     song2
  })  
const burgerIcon = document.querySelector('burger-icon');
const menuItems = document.querySelector('.navbar');
const menu = document.querySelector('.menu');

burgerIcon.addEventListener('click', () => {
  menu.classList.toggle('show');
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !burgerIcon.contains(event.target)) {
    menu.classList.remove('show');
  }
});

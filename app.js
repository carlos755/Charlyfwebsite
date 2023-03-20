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

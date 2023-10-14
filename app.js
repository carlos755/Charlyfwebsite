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
  window.addEventListener('load', function() {
    var loader = document.getElementById('loader-container-text');
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
  song2.addEventListener('ended', function() {
    song3
    })
    song3.addEventListener('ended', function() {
      song1
      })
      function playSong1() {
        song1.play();
        }
        function playSong2() {
      song2.play();
      }
      function playSong3() {
        song3.play();
        }

        gapi.load('auth2', function() {
          gapi.auth2.init({
              client_id: '88336165325-l2vaismja9p93b0e6h8mic8hr3i3ohee.apps.googleusercontent.com'
          });
          
          gapi.signin2.render('google-signin-button', {
              'scope': 'email profile',
              'width': 240,
              'height': 40,
              'longtitle': true,
              'theme': 'light',
              'onsuccess': onSignIn,
              'onfailure': onSignInFailure
          });
      });
      
      function onSignIn(googleUser) {
          // Aquí puedes acceder a la información del usuario, como el ID del usuario y el token de acceso.
          var profile = googleUser.getBasicProfile();
          console.log('ID: ' + profile.getId());
          console.log('Nombre: ' + profile.getName());
          console.log('Email: ' + profile.getEmail());
      }

      function onSignInFailure(error) {
          console.log('Error al iniciar sesión con Google: ' + error.error);
      }

      function onSignIn(googleUser) {
        // Aquí puedes acceder a la información del usuario, como el ID del usuario y el token de acceso.
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId());
        console.log('Nombre: ' + profile.getName());
        console.log('Email: ' + profile.getEmail());
    
        // Ocultar el botón después de que el usuario haya iniciado sesión
        var signInButton = document.getElementById("google-signin-button");
        signInButton.style.display = "none";
    
        // Puedes enviar la información a tu servidor y autenticar al usuario allí.
    }
    
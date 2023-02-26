    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDCeTPQ6zf2ORVQUEMyaCK6KnlcySdjZVs",
      authDomain: "charlygamer.firebaseapp.com",
      projectId: "charlygamer",
      storageBucket: "charlygamer.appspot.com",
      messagingSenderId: "111016482429",
      appId: "1:111016482429:web:e1dab8fb390dac92e04314",
      measurementId: "G-9876RTF74N"
    };
  
    const songList = document.getElementById("song-list");
    const audio = new Audio();
    
    songList.addEventListener("click", (e) => {
      e.preventDefault();
      audio.src = e.target.href;
      audio.play();
    });
    
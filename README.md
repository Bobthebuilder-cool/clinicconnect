<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAa94ErwJa70z9um0cMJFSL5EU9oJQjdTg",
    authDomain: "clinicconnect1234.firebaseapp.com",
    projectId: "clinicconnect1234",
    storageBucket: "clinicconnect1234.appspot.com",
    messagingSenderId: "20872067175",
    appId: "1:20872067175:web:975b043ab951979c253cc2",
    measurementId: "G-LW2XPN1WJD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
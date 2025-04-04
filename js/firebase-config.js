
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBXVvb_v1haXnEhSMrdyyibSWMUMb8QgRQ",
    authDomain: "travel-inspiration-267d0.firebaseapp.com",
    projectId: "travel-inspiration-267d0",
    storageBucket: "travel-inspiration-267d0.firebasestorage.app",
    messagingSenderId: "372726521948",
    appId: "1:372726521948:web:ce1f43049eb57d57d28699",
    measurementId: "G-GQSH9W67R0"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
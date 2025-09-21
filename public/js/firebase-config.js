// public/assets/js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXVvb_v1haXnEhSMrdyyibSWMUMb8QgRQ",
  authDomain: "travel-inspiration-267d0.firebaseapp.com",
  databaseURL:
    "https://travel-inspiration-267d0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "travel-inspiration-267d0",
  storageBucket: "travel-inspiration-267d0.firebasestorage.app",
  messagingSenderId: "372726521948",
  appId: "1:372726521948:web:ce1f43049eb57d57d28699",
  measurementId: "G-GQSH9W67R0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
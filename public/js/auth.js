// public/js/auth.js
import { auth } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  // Signup Page Logic
  const signupBtn = document.getElementById("signup-btn");
  if (signupBtn) {
    signupBtn.addEventListener("click", () => {
      const email = document.getElementById("signup-email").value;
      const password = document.getElementById("signup-password").value;

      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Signup successful!");
          window.location.href = "index.html";
        })
        .catch((error) => {
          alert("Error: " + error.message);
        });
    });
  }

  // Login Page Logic
  const loginBtn = document.getElementById("login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          window.location.href = "dashboard.html";
        })
        .catch((error) => {
          const msg = document.getElementById("login-message");
          msg.innerText = error.message;
          msg.style.color = "red";
        });
    });
  }
});

import { auth } from "./firebase-config.js";
import { signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    const navbarHTML = `
        <nav class="navbar">
            <h1 class="logo"><a href="dashboard.html">Travel Inspiration</a></h1>
            <div class="hamburger" id="hamburger">&#9776;</div>
            <ul class="nav-links" id="nav-links">
                <li><a href="dashboard.html">Home</a></li>
                <li><a href="my-trips.html">My Trips</a></li>
                <li><a href="index.html" id="logout-btn">Logout</a></li>
            </ul>
        </nav>
    `;

    document.body.insertAdjacentHTML("afterbegin", navbarHTML);

    const logoutBtn = document.getElementById("logout-btn");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    if (logoutBtn) {
        logoutBtn.addEventListener("click", async (event) => {
            event.preventDefault();
            await signOut(auth);
            window.location.href = "index.html";
        });
    }

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});

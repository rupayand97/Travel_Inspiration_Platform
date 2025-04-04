async function fetchDestinations() {
    let response = await fetch(`https://travel-inspiration-267d0-default-rtdb.asia-southeast1.firebasedatabase.app/destinations.json`);
    let data = await response.json();
    console.log(data);
    
    return data ? Object.values(data) : [];
}
fetchDestinations()

async function displayRecommendations() {
    let preference = document.getElementById("preference").value;
    let recommendationsDiv = document.getElementById("recommendations");
    recommendationsDiv.innerHTML = "<p>Loading recommendations...</p>";

    let destinations = await fetchDestinations();

    let filteredDestinations = destinations.filter(dest => 
        dest.category && Array.isArray(dest.category) && dest.category.includes(preference)
    );

    recommendationsDiv.innerHTML = "";

    if (filteredDestinations.length === 0) {
        recommendationsDiv.innerHTML = "<p>No recommendations found for this category.</p>";
        return;
    }

    filteredDestinations.forEach(dest => {
        let card = document.createElement("div");
        card.classList.add("destination-card");

        let galleryHTML = `<div class="gallery">`;
        if (dest.image_url && Array.isArray(dest.image_url)) {
            dest.image_url.forEach(url => {
                galleryHTML += `<img src="${url}" alt="${dest.name}" onclick="openLightbox('${url}')">`;
            });
        } else {
            galleryHTML += `<img src="${dest.image_url}" alt="${dest.name}" onclick="openLightbox('${dest.image_url}')">`;
        }
        galleryHTML += `</div>`;

        let budgetText = dest.budget_range 
            ? `₹${dest.budget_range.min.toLocaleString()} - ₹${dest.budget_range.max.toLocaleString()}`
            : "Budget not available";

        card.innerHTML = `
            <h3>${dest.name}</h3>
            ${galleryHTML}
            <p>${dest.description}</p>
            <p><strong>Rating:</strong> ${dest.rating} ⭐</p>
            <p><strong>Budget Range:</strong> ${budgetText}</p>
            <button class="btn" onclick="saveToFavorites('${dest.name}')">Save to Favorites</button>
        `;
        recommendationsDiv.appendChild(card);
    });
}

function openLightbox(imageSrc) {
    let lightbox = document.getElementById("lightbox");
    let lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = imageSrc;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function saveToFavorites(destinationName) {
    let savedTrips = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!savedTrips.includes(destinationName)) {
        savedTrips.push(destinationName);
        localStorage.setItem("favorites", JSON.stringify(savedTrips));
        alert("Destination saved to favorites!");
    } else {
        alert("Already in favorites!");
    }
}

document.getElementById("getRecommendations").addEventListener("click", displayRecommendations);
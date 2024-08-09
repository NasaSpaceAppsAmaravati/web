// scripts.js
function handleScroll() {
    const navbar = document.querySelector(".navbar-custom");
    const brand = document.querySelector(".navbar-brand");
    if (window.scrollY > 50) {
        navbar.classList.remove("navbar-transparent");
        brand.classList.remove("hidden");
    } else {
        navbar.classList.add("navbar-transparent");
        brand.classList.add("hidden");
    }
}

document.addEventListener("scroll", handleScroll);

// Ensure the correct initial state on page load
document.addEventListener("DOMContentLoaded", handleScroll);

document
    .querySelector(".navbar-toggler")
    .addEventListener("click", function() {
        this.classList.toggle("open");
    });

// Function to check the position of the <h2> element and viewport width
function checkPosition() {
    var eventDateElement = document.getElementById("event-date");
    var mobileButton = document.querySelector(".mobile-btn");
    var rect = eventDateElement.getBoundingClientRect();
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    // Only proceed if the viewport width is 768px or lower
    if (viewportWidth <= 768) {
        // If the top of the <h2> element touches the top of the viewport
        if (rect.top <= 0) {
            mobileButton.style.display = "block";
        } else {
            mobileButton.style.display = "none";
        }
    } else {
        // Ensure the button is hidden for larger viewports
        mobileButton.style.display = "none";
    }
}

// Add scroll and resize event listeners
window.addEventListener("scroll", checkPosition);
window.addEventListener("resize", checkPosition);

// Initial check in case the page is loaded in a scrolled position or with a specific viewport width
checkPosition();
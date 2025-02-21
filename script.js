const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');
const themeToggler = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = "block";
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = "none";
});

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});
// Change Profile Picture
document.getElementById("change-pic-btn").addEventListener("click", function() {
    document.getElementById("profile-pic").click();
});

document.getElementById("profile-pic").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("profile-pic-preview").src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Remove Profile Picture (Resets to Default)
document.getElementById("remove-pic-btn").addEventListener("click", function() {
    document.getElementById("profile-pic-preview").src = "default-profile.jpg";  // Replace with your default image
    document.getElementById("profile-pic").value = ""; // Clear input
});


document.addEventListener("DOMContentLoaded", function () {
    const userIdField = document.getElementById("user-id");

    // Generate a random 3-digit number (100-999)
    const randomUserId = Math.floor(100 + Math.random() * 900);
    
    userIdField.value = randomUserId; // Set the value
});


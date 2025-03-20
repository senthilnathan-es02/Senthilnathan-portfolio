document.getElementById("download-cv").onclick = function () {

    const link = document.createElement("a");

    link.href = "./assets/image/senthilnathan_resume.pdf";

    link.download = "senthilnathan-CV.pdf";

    link.click();
};


// Navbar active link functionality
const navLinks = document.querySelectorAll('.navbar');

// Function to set the active class on the clicked navbar link
function setActiveLink() {
    navLinks.forEach(link => link.classList.remove('active')); // Remove 'active' class from all links
    this.classList.add('active'); // Add 'active' class to the clicked link
}

// Add click event to all navbar links
navLinks.forEach(link => {
    link.addEventListener('click', setActiveLink);
});

// Set the active class based on the current URL hash when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const currentHash = window.location.hash; // Get the current hash from the URL
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active');
        }
    });
});

// Sayhello button location
document.getElementById("sayhello").onclick = function () {
    // Navigate to the "Contact" section by changing the hash
    window.location.href = "#contact";
};

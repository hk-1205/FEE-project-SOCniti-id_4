function togglePopup() {
    const popup = document.getElementById('popupForm');
    popup.style.display = (popup.style.display === 'flex') ? 'none' : 'flex';
}

// Function to move the button at specific intervals
function moveButton() {
    const button = document.querySelector('.contact-btn');
    let topPosition = 50; // Initial position (percentage)

    setInterval(() => {
        topPosition = (topPosition + 10) % 100; // Move down by 10% each time, looping around
        button.style.top = `${topPosition}%`;
    }, 3000); // Change position every 3 seconds
}

// Start moving the button when the page loads
window.onload = moveButton;
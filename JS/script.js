// JavaScript for Dashboard functionality

// Simple example for a "View More" button click event on each card
document.querySelectorAll('.card button').forEach(button => {
    button.addEventListener('click', () => {
        alert('More details about ' + button.parentElement.querySelector('h3').innerText);
    });
});

//To control background music playback with a play/pause button on a webpage.
document.addEventListener('DOMContentLoaded', function() {
    var bgm = document.getElementById('bgm');
    var playButton = document.getElementById('play-button');
    var icon = playButton.querySelector('i');
    playButton.addEventListener('click', function() {
        if (bgm.paused) {
            bgm.play();
            icon.className = 'fa fa-pause'; // Change to pause icon
        } else {
            bgm.pause();
            icon.className = 'fa fa-play'; // Change to play icon
        }
    });
});

// This function checks the current display style of the specified element.
function toggleAnswer(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}
//To fetch and display a new quote from an API each time the button is clicked,
document.getElementById('newQuoteButton').addEventListener('click', fetchNewQuote);
function fetchNewQuote() {
 fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quoteText').textContent = `"${data.content}"`;
            document.getElementById('quoteAuthor').textContent = `- ${data.author}`;
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            document.getElementById('quoteText').textContent = 'An error occurred while fetching a new quote.';
            document.getElementById('quoteAuthor').textContent = '';
        });
}
fetchNewQuote();

function changeLink() {
    var link = document.getElementById('dynamicLink');
    link.href = "https://www.w3schools.com/";
    link.textContent = "Visit W3schools Site";
}
//allowing users to switch between light and dark visual modes
document.getElementById('themeToggle').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent the default anchor action
    var section = document.getElementById('themeSection');
    if (section.classList.contains('light-theme')) {
        section.classList.remove('light-theme');
        section.classList.add('dark-theme');
        this.textContent = 'Switch to Light Theme'; // Update the link text
    } else {
        section.classList.remove('dark-theme');
        section.classList.add('light-theme');
        this.textContent = 'Switch to Dark Theme'; // Update the link text
    }
});

$(document).ready(function() {
    $('#toggleContent').click(function(event) {
        event.preventDefault();
        $('#expandableContent').slideToggle(500, function() {
        $('#toggleContent').text($(this).is(':visible') ? 'Show Less' : 'Show More');
    });
});
});

/**
 * To manages the animation of a ball within a defined game area and keeps track of the player's score. 
 * It adjusts the ball's movement based on collisions with the game area's borders, applying a visual effect when the ball hits a wall.
 * The ball's speed increases each time it is clicked, and the score increments accordingly. 
 */

let ball = document.getElementById('ball');
let scoreDisplay = document.getElementById('score');
let score = 0;
let dx = 2; // Change in position along X-axis
let dy = 2; // Change in position along Y-axis
function hitWallEffect() {
    ball.style.backgroundColor = '#ff0000'; 
    ball.style.transform = 'scale(1.2)'; 
    setTimeout(() => {
        ball.style.backgroundColor = ''; // Revert color back to original
        ball.style.transform = ''; // Revert scale back to normal
    }, 100); // Duration of the effect in milliseconds  
}

function moveBall() {
    let x = ball.offsetLeft + dx;
    let y = ball.offsetTop + dy;
    // Adjust calculations game area boarder
    let gameAreaBorderWidth = parseInt(getComputedStyle(gameArea).borderWidth, 10);

    // Check for wall collisions
    if (x <= gameAreaBorderWidth || x >= gameArea.offsetWidth - ball.offsetWidth - gameAreaBorderWidth) {
        dx = -dx;
        hitWallEffect(); 
    }
    if (y <= gameAreaBorderWidth || y >= gameArea.offsetHeight - ball.offsetHeight - gameAreaBorderWidth) {
        dy = -dy;
        hitWallEffect();
    }

    // Move the ball
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';
    requestAnimationFrame(moveBall);
}

ball.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    dx *= 1.1; // Increase speed
    dy *= 1.1;
});
moveBall(); // Start the animation





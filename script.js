document.addEventListener('DOMContentLoaded', function() {
    let savedElapsedTime = localStorage.getItem('elapsedTime');

    // If no startTime exists, set the current time as the start time
    if (!savedElapsedTime) {
        savedElapsedTime = 0; 
    } else {
        savedElapsedTime = parseInt(savedElapsedTime, 10);
    }

    const timeElement = document.getElementById('number'); 
    if(!timeElement) {
        console.error('Element with id "number" not found.');
        return;
    }
    
    let startTime = Date.now();

    setInterval(function() {
        const currentTime = Date.now(); 
        const elapsedTime = Math.floor((currentTime - startTime) / 1000) + savedElapsedTime; 
        localStorage.setItem('elapsedTime', elapsedTime); // Corrected the stored variable
        
        const seconds = Math.floor(elapsedTime % 60);
        const minutes = Math.floor((elapsedTime / 60) % 60);
        const hours = Math.floor((elapsedTime / 3600) % 24);
        const days = Math.floor((elapsedTime / (24 * 3600)) % 7);
        const weeks = Math.floor(elapsedTime / (7 * 24 * 3600));
        const years = Math.floor(elapsedTime / (365.25 * 24 * 3600));

        timeElement.textContent = `Fun Fact! I have been coding for: ${years} years, ${weeks % 52} weeks, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds. `

    }, 1000);
});

const colorChangeBtn = document.getElementById('myButton');

colorChangeBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  const colors = ['#87cefa'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const colorChange1 = document.getElementsByClassName('originalcolor')[0]; 
colorChange1.addEventListener('click', () => {
    document.body.style.backgroundColor = originalColor();
}); 
function originalColor() {
    const colors = ['#bcbcc1']
    return colors[Math.floor(Math.random() * colors.length)];
};
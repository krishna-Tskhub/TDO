const wheel = document.querySelector('.wheel');
const askButton = document.getElementById('askButton');
const resetButton = document.getElementById('resetButton');
const resultBox = document.getElementById('resultBox');
const response = document.getElementById('response');

askButton.addEventListener('click', () => {
    // Generate a random degree between 360 and 3600 for the spin
    const randomDegree = Math.floor(Math.random() * 3600) + 360; // Random spin between 1 and 10 full rotations
    wheel.style.transition = 'transform 3s ease-out';  // Smooth spinning transition
    wheel.style.transform = `rotate(${randomDegree}deg)`; // Apply the spin

    // Determine the result based on the spin
    const result = randomDegree % 360 < 180 ? 'Do it!' : 'Don\'t do it!';
    
    // Display the result
    setTimeout(() => {
        resultBox.value = `The Oracle says: ${result}`;
        resultBox.style.display = 'block';
        response.innerText = ''; // Clear previous result text
        askButton.style.display = 'none'; // Hide ask button
        resetButton.style.display = 'inline'; // Show reset button
    }, 3000); // Delay to match spin duration
});

resetButton.addEventListener('click', () => {
    // Reset the wheel and UI
    wheel.style.transition = 'none'; // Disable transition for instant reset
    wheel.style.transform = `rotate(0deg)`; // Reset the wheel position
    resultBox.style.display = 'none'; // Hide result box
    askButton.style.display = 'inline'; // Show ask button
    resetButton.style.display = 'none'; // Hide reset button
    document.getElementById('question').value = ''; // Clear the input field
});

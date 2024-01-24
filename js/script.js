// Get all the cubes and checkboxes and store them in arrays
const cubes = Array.from(document.getElementsByClassName('cube'));
const checkboxes = Array.from(document.getElementsByClassName('auswahl'));

// Initialize the number of attempts and the reference to the dice button
let attempts = 0;
const diceButton = document.querySelector('#buttonns button:first-child');

// Define the function to roll the dice
function rollDice() {

    for (const checkbox of checkboxes) {
        checkbox.disabled = false;
    }
    // Increment the number of attempts and update the dice button label
    attempts++;
    diceButton.textContent = `roll dice ${attempts}`;

    // If the number of attempts is greater than 3, disable the dice button
    if (attempts > 3) {
        diceButton.disabled = true;
        return;
    }

    // Generate random numbers for each cube and update their src attribute
    for (let i = 0; i < cubes.length; i++) {
        // If the corresponding checkbox is checked, keep the current value
        if (!checkboxes[i].checked) {
            // Otherwise, generate a random number between 1 and 6
            const value = Math.floor(Math.random() * 6) + 1;
            // Set the src attribute of the cube to the corresponding image
            cubes[i].src = `cube${value}.jpg`;//= "cube"+value+".jpg" = "cube1.jpg"
        }
    }
}

// Define the function to reset the game
function nextPlayer() {
    // Reset the number of attempts and enable the dice button
    attempts = 0;
    diceButton.disabled = false;
    diceButton.textContent = `roll dice`;

    // Reset the src attribute of each cube to the default image
    for (const cube of cubes) {
        cube.src = `cube1.jpg`;
    }

    // Uncheck all checkboxes and disable them
    for (const checkbox of checkboxes) {
        checkbox.checked = false;
        checkbox.disabled = true;
    }
}

// Add event listeners to the dice button and the reset button
diceButton.addEventListener('click', rollDice);
const resetButton = document.querySelector('#buttonns button:last-child');
resetButton.addEventListener('click', nextPlayer);

// Call the resetGame function when the window loads
window.addEventListener('load', nextPlayer);

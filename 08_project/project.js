// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const button = document.querySelector('button');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('Weight');
    const resultDiv = document.getElementById('result');

    // Event listener for button click
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission

        // Get user input
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        // Validate input
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            resultDiv.textContent = "Please enter valid positive numbers for height and weight.";
            resultDiv.style.color = 'red';
            return;
        }

        // Calculate BMI
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        // Display BMI result
        resultDiv.textContent = `Your BMI is: ${bmi}`;
        resultDiv.style.color = 'black';

        // Interpret BMI result
        if (bmi < 18.5) {
            resultDiv.textContent += " (Underweight)";
            resultDiv.style.color = '#f0ad4e'; // Warning color
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultDiv.textContent += " (Normal weight)";
            resultDiv.style.color = '#5cb85c'; // Success color
        } else {
            resultDiv.textContent += " (Overweight)";
            resultDiv.style.color = '#d9534f'; // Danger color
        }
    });
});

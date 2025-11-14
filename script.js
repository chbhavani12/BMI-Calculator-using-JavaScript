function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
        document.getElementById('result').innerText = 
        "Please enter valid positive numbers for weight and height.";
        return;
    }

    const heightM = heightCm / 100; 
    const bmi = weight / (heightM * heightM);

    let bmiCategory = "";
    let foodSuggestion = "";

    if (bmi < 18.5) {
        bmiCategory = "Underweight";
        foodSuggestion = `
            <ul>
                <li>High-calorie foods like nuts, dry fruits</li>
                <li>Milk, cheese, paneer, eggs</li>
                <li>Avocado, peanut butter, bananas</li>
                <li>Rice, pasta, potatoes</li>
            </ul>
        `;
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = "Normal weight";
        foodSuggestion = `
            <ul>
                <li>Balanced diet: fruits + vegetables + whole grains</li>
                <li>Lean proteins (chicken, fish, legumes)</li>
                <li>Healthy fats: nuts, olive oil</li>
                <li>Plenty of water and regular meals</li>
            </ul>
        `;
    } 
    else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = "Overweight";
        foodSuggestion = `
            <ul>
                <li>Low-calorie foods: fruits, salads, soups</li>
                <li>Reduce fried foods, sweets, and junk food</li>
                <li>Choose whole grains instead of white rice</li>
                <li>Lean proteins and lots of water</li>
            </ul>
        `;
    } 
    else {
        bmiCategory = "Obese";
        foodSuggestion = `
            <ul>
                <li>High-fiber foods: oats, brown rice, millets</li>
                <li>Green leafy vegetables, fruits</li>
                <li>Avoid sugar, bakery items, and soft drinks</li>
                <li>Prefer steamed/boiled foods and include protein</li>
            </ul>
        `;
    }

    document.getElementById('result').innerHTML = `
        <p>Your BMI is: <b>${bmi.toFixed(2)}</b> (${bmiCategory})</p>
        <h3>Food Suggestions:</h3>
        ${foodSuggestion}
    `;
}

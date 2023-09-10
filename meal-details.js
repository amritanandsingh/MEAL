const mealDetails = document.getElementById('meal-details');

// Function to get the meal ID from the URL query parameter
function getMealIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Function to fetch meal details by ID
async function getMealDetails(mealId) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals[0];
}

// Function to display meal details
async function displayMealDetails() {
    const mealId = getMealIdFromUrl();

    if (mealId) {
        const meal = await getMealDetails(mealId);

        if (meal) {
            mealDetails.innerHTML = `
                <h2>${meal.strMeal}</h2>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <p>${meal.strInstructions}</p>
            `;
        } else {
            mealDetails.innerHTML = '<p>Meal not found</p>';
        }
    } else {
        mealDetails.innerHTML = '<p>Invalid meal ID</p>';
    }
}

// Call the displayMealDetails function when the page loads
displayMealDetails();

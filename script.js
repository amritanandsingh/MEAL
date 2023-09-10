const searchInput = document.getElementById('search');
const suggestions = document.getElementById('suggestions');
const favoritesList = document.getElementById('favorites');
const mealDetails = document.getElementById('meal-details');

let favoriteMeals = JSON.parse(localStorage.getItem('favoriteMeals')) || [];

// Function to save favoriteMeals to localStorage
function saveFavoriteMeals() {
    localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals));
}

function removeFromFavorites(mealId) {
    favoriteMeals = favoriteMeals.filter(meal => meal.id !== mealId);
    updateFavoritesList();
    saveFavoriteMeals();
}

// Function to fetch meal suggestions from the API
async function getMealSuggestions(query) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await response.json();
    return data.meals || [];
}

// Function to display meal suggestions
function displaySuggestions(meals) {
    suggestions.innerHTML = '';
    meals.forEach(meal => {
        const li = document.createElement('li');
        li.textContent = meal.strMeal;

        const addToFavoritesBtn = document.createElement('button');
        addToFavoritesBtn.textContent = 'Add to Favorites';
        addToFavoritesBtn.addEventListener('click', () => addToFavorites(meal.idMeal, meal.strMeal));

        const viewDetailsLink = document.createElement('a');
        viewDetailsLink.textContent = 'View Details';
        viewDetailsLink.href = `meal-details.html?id=${meal.idMeal}`;
        viewDetailsLink.target = '_blank';

        li.appendChild(addToFavoritesBtn);
        li.appendChild(viewDetailsLink);

        suggestions.appendChild(li);
    });
}


// Function to display meal details
async function displayMealDetails(mealId) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    const meal = data.meals[0];

    // Display meal details on a new page
    mealDetails.innerHTML = `
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        <p>${meal.strInstructions}</p>
        <button onclick="addToFavorites('${meal.idMeal}', '${meal.strMeal}')">Add to Favorites</button>
    `;
}

// Function to add a meal to favorites
function addToFavorites(mealId, mealName) {
    favoriteMeals.push({ id: mealId, name: mealName });
    updateFavoritesList();
}

// Function to update the favorites list
function updateFavoritesList() {
    favoritesList.innerHTML = '';
    favoriteMeals.forEach(meal => {
        const li = document.createElement('li');
        li.textContent = meal.name;

        const removeFromFavoritesBtn = document.createElement('button');
        removeFromFavoritesBtn.textContent = 'Remove from Favorites';
        removeFromFavoritesBtn.addEventListener('click', () => removeFromFavorites(meal.id));

        li.appendChild(removeFromFavoritesBtn);
        favoritesList.appendChild(li);
    });
}

// Event listener for search input
searchInput.addEventListener('input', async () => {
    const query = searchInput.value.trim();
    if (query.length > 0) {
        const meals = await getMealSuggestions(query);
        displaySuggestions(meals);
    } else {
        suggestions.innerHTML = '';
    }
});

updateFavoritesList();

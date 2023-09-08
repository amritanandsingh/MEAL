const mealNameInput = document.getElementById("mealName");
const suggestions = document.getElementById("suggestions");

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

mealNameInput.addEventListener("input", () => {
    const mealName = mealNameInput.value.trim();

    if (mealName.length >= 3) {
        fetch(`${API_URL}${mealName}`)
            .then((response) => response.json())
            .then((data) => {
                displaySuggestions(data.meals);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    } else {
        clearSuggestions();
    }
});

function displaySuggestions(meals) {
    suggestions.innerHTML = "";

    if (meals) {
        meals.forEach((meal) => {
            const mealItem = document.createElement("li");
            mealItem.textContent = meal.strMeal;
            mealItem.addEventListener("click", () => {
                mealNameInput.value = meal.strMeal;
                clearSuggestions();
            });
            suggestions.appendChild(mealItem);
        });
    } else {
        clearSuggestions();
    }
}

function clearSuggestions() {
    suggestions.innerHTML = "";
}

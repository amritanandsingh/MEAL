# MealFinder App

MealFinder is a web application that allows you to search for meals, view their details, and add them to your list of favorite meals. This README provides an overview of the app's features, how to use it, and instructions for setting it up locally.

## Features

### Home Page
- Search any meal from the API and display search results on the frontend in real-time as you type, similar to Google's search suggestions.
- Each search result meal can be added to "My favorite meals" using a favorite button.
- Clicking on a search result meal opens a new page with more detailed information about that meal.

### Meal Detail Page
- Displays detailed information about a selected meal, including its name, photo, instructions, and additional details.

### My Favorite Meals Page
- Lists all the favorite meals you've added.
- Persistence: The list of favorite meals remains the same even after closing or refreshing the browser.
- Remove from favorites: Each meal in the list has a "Remove from favorites" button that allows you to remove a meal from your favorites.

## How to Use

1. **Search for Meals**
   - On the home page, start typing the name of a meal you'd like to search for.
   - As you type, the search results will update in real-time.
   - Click the "Favorite" button to add a meal to your favorites.

2. **View Meal Details**
   - Click on a meal from the search results to view its detailed information on a separate page.

3. **My Favorite Meals**
   - Access your list of favorite meals by navigating to the "My favorite meals" page.
   - To remove a meal from your favorites, click the "Remove from favorites" button next to the meal.

## Local Setup

To run MealFinder locally, follow these steps:

1. **Clone the Repository**
   ```
   git clone https://github.com/yourusername/meal-finder.git
   cd meal-finder
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Configure API Key**
   - You will need to obtain an API key from the meal API provider (replace `YOUR_API_KEY` below).
   - Create a `.env` file in the project root and add your API key:
     ```
     REACT_APP_API_KEY=YOUR_API_KEY
     ```

4. **Start the Development Server**
   ```
   npm start
   ```

5. **Open in Browser**
   - Open your web browser and go to `http://localhost:3000` to access the MealFinder app.

## Technologies Used

- React: Frontend JavaScript library for building user interfaces.
- [Meal API](https://www.example.com/api): The source of meal data.

## Credits

This project was created by [Your Name]. Feel free to contribute, report issues, or provide feedback to help improve MealFinder.

Thank you for using MealFinder! Enjoy exploring and discovering delicious meals!

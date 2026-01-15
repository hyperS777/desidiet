# DesiDiet 

DesiDiet AI is a lightweight diet tracking web application focused on Indian meals.  
It helps users understand their daily calorie and nutrition intake in a simple and practical way.

## Problem Statement
Most diet tracking apps focus on Western food and make it difficult to track common Indian meals such as roti, dal, curry, etc. Users often guess nutrition values or stop tracking completely. Most app also ask you to pay before being able to use the app.

## Solution
DesiDiet AI provides an easy-to-use tracker that supports:

Built-in nutrition data for common Indian meals.  
Manual nutrition entry for any custom food.
Optional AI nutrition estimation for unknown foods.  

The app also works without AI, making it easy for anyone to run and evaluate.

## Features
Add meals from Indian food list  
Enter nutrition manually  
View daily calorie and macro totals  
Optional AI-based nutrition estimation  
Simple and beginner friendly interface  

## Tech Stack
- Frontend: HTML, CSS, JavaScript  
- Backend: Python (FastAPI) (optional)  
- AI: OpenAI API (optional integration)  

## How to Run
### Frontend (works without backend)
1. Open `frontend/index.html` in your browser.
2. Start adding meals and tracking nutrition.

### Optional AI Feature
To enable AI-based nutrition estimation:
1. Set up the backend from the `backend` folder.
2. Add your API key locally.
3. Run:
   ```bash
   uvicorn main:app --reload
   
### Future Improvements
Mobile friendly app design.
Barcode scanning for packaged food.
Meal history and weekly reports.
Browser extension for quick logging.

# DesiDiet 

DesiDiet AI is a lightweight diet tracking web application focused on Indian meals.  
It helps users understand their daily calorie and nutrition intake in a simple and practical way.

## Problem Statement
Most diet tracking apps focus on Western food and make it difficult to track common Indian meals such as roti, dal, curry, etc. Users often guess nutrition values or stop tracking completely. Most app also ask you to pay before being able to use the app.

## Solution
DesiDiet AI provides an easy to use tracker that supports:

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
2. Install required packages by using this command from backend folder: python -m pip install fastapi uvicorn openai python-dotenv
3. Add your API key locally.
4. Run:
   cd backend
   python -m uvicorn server:app --reload
5. Open `frontend/index.html` in your browser.

DesiDiet AI includes AI-based nutrition estimation as an optional enhancement.
The core application works fully without AI
Note: AI is used only when:
         An API key is available
         Quota/credits are available
   
If AI is unavailable, the app falls back to:
   Manual nutrition entry
   Built-in food data
   
This ensures:
   Easy evaluation for judges
   No forced setup
   Secure handling of API keys
   
### Future Improvements
Mobile friendly app design.
Barcode scanning for packaged food.
Meal history and weekly reports.
Browser extension for quick logging.

# DesiDiet - Team Code Breakers
This Project was made for the Winter Works challenge by LOOP - The Developers Club in SoE, JNU.

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
Core Functionality:
1. Add meals from a predefined list of common Indian & Western foods
2. Manual nutrition entry (calories, protein, carbs, fat)
3. Automatic meal timeline with timestamps
4. Meal categorization: Breakfast, Lunch, Dinner, Snack
5. Optional notes per meal (e.g., “post-workout”, “cheat meal”)
   
Tracking & Insights:
1. Daily nutrition totals (calories, protein, carbs, fat)
2. Per-meal stats (calories & protein by meal type)
3. Daily calorie goal with visual progress bar
4. Filterable meal history by meal type

Persistence & Export:
1. Local storage (data persists across reloads)
2. Export meal history to CSV
3. Clear history with one click

AI (Optional):
1. AI-powered nutrition estimation for free-text food input
2. Graceful fallback if AI is unavailable

## Tech Stack
- Frontend: HTML, CSS, JavaScript, LocalStorage (offline-first design)
- Backend: Python (FastAPI) (optional)  
- AI: OpenAI API (optional integration)  

## How to Run
### Frontend (works without backend)
1. Open `frontend/index.html` in your browser.
2. Start adding meals and tracking nutrition.

### Optional AI Feature
Note: AI is used only when:
         An API key is available
         Quota/credits are available
         
To enable AI-based nutrition estimation:
1. Set up the backend from the `backend` folder.
2. Install required packages by using this command from backend folder: python -m pip install fastapi uvicorn openai python-dotenv
3. Make sure you have credits in your account. 
4. Add your API key locally.
5. Run:
   cd backend
   python -m uvicorn server:app --reload
6. Open `frontend/index.html` in your browser.

This project includes an optional AI-powered nutrition estimation feature
using OpenAI via a FastAPI backend.

It also includes AI-based nutrition estimation as an optional enhancement.
The core application works fully without AI.

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

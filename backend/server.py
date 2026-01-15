import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
from ai import estimate_nutrition

print("API KEY SEEN BY FASTAPI:", os.getenv("OPENAI_API_KEY"))

app = FastAPI()


class Food(BaseModel):
    name: str

@app.get("/")
def root():
    return {"status": "DesiDiet AI backend running"}

@app.post("/ai/nutrition")
def get_nutrition(food: Food):
    try:
        text = estimate_nutrition(food.name)
        data = json.loads(text)
        return data
    except Exception:
        return {"error": "AI not enabled. Use manual entry instead."}

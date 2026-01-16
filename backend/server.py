import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
from ai import estimate_nutrition


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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
        return {
            "error": "AI service unavailable (quota or key issue). Please use manual entry or food list."
        }



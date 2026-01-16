from fastapi import FastAPI
from pydantic import BaseModel
import os
import json
from openai import OpenAI

app = FastAPI()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class Food(BaseModel):
    name: str

@app.post("/ai/nutrition")
def ai_nutrition(food: Food):
    prompt = f"""
    Estimate nutrition for Indian food: {food.name}.
    Respond ONLY in JSON:
    {{
      "calories": number,
      "protein": number,
      "carbs": number,
      "fat": number
    }}
    """

    try:
        res = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[{"role": "user", "content": prompt}]
        )
        return json.loads(res.choices[0].message.content)

    except Exception as e:
        return {"error": str(e)}

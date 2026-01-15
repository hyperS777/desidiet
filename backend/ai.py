import os
from openai import OpenAI

def estimate_nutrition(food: str):
    api_key = os.getenv("OPENAI_API_KEY")

    if not api_key:
        raise Exception("AI not enabled")

    client = OpenAI(api_key=api_key)

    prompt = f"""
Estimate nutrition for one average serving of this Indian food.
Return ONLY valid JSON with keys: calories, protein, carbs, fat.
Food: "{food}"
"""

    response = client.responses.create(
        model="gpt-4.1-mini",
        input=prompt
    )

    return response.output_text

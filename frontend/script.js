// Nutrition data per serving
const foodData = {
  roti:    { calories:110, protein:3,  carbs:18, fat:3 },
  rice:    { calories:200, protein:4,  carbs:45, fat:1 },
  dal:     { calories:180, protein:9,  carbs:24, fat:4 },
  paneer:  { calories:320, protein:14, carbs:10, fat:22 },
  dosa:    { calories:170, protein:4,  carbs:28, fat:5 }
};

let totals = { calories:0, protein:0, carbs:0, fat:0 };

// Add meal from list
function addMeal() {
  const input = document.getElementById("foodInput");
  const food = input.value.toLowerCase();

  if (!food) {
    alert("Enter a food name");
    return;
  }

  if (!foodData[food]) {
    alert("Food not found in list. Try AI or manual entry.");
    return;
  }

  const meal = foodData[food];

  totals.calories += meal.calories;
  totals.protein  += meal.protein;
  totals.carbs    += meal.carbs;
  totals.fat      += meal.fat;

  updateTotals();
  input.value = "";
}

// Add meal manually
function addManualMeal() {
  const calories = Number(document.getElementById("mCalories").value);
  const protein  = Number(document.getElementById("mProtein").value);
  const carbs    = Number(document.getElementById("mCarbs").value);
  const fat      = Number(document.getElementById("mFat").value);

  if (!calories || !protein || !carbs || !fat) {
    alert("Please fill all nutrition fields");
    return;
  }

  totals.calories += calories;
  totals.protein  += protein;
  totals.carbs    += carbs;
  totals.fat      += fat;

  updateTotals();

  document.getElementById("mCalories").value = "";
  document.getElementById("mProtein").value = "";
  document.getElementById("mCarbs").value = "";
  document.getElementById("mFat").value = "";
}

// Optional AI integration
async function useAI() {
  const food = document.getElementById("foodInput").value;

  if (!food) {
    alert("Enter a food name first");
    return;
  }

  try {
    const res = await fetch("http://127.0.0.1:8000/ai/nutrition", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: food })
    });

    const data = await res.json();

    if (data.error) throw new Error();

    totals.calories += data.calories;
    totals.protein  += data.protein;
    totals.carbs    += data.carbs;
    totals.fat      += data.fat;

    updateTotals();
  } catch (e) {
    alert("AI feature is optional. Use manual entry or food list.");
  }
}

// Updates totals on screen
function updateTotals() {
  document.getElementById("tCalories").innerText = totals.calories;
  document.getElementById("tProtein").innerText  = totals.protein;
  document.getElementById("tCarbs").innerText    = totals.carbs;
  document.getElementById("tFat").innerText      = totals.fat;
}

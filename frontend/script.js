// Nutrition data per serving
const foodData = {

  rice: { calories: 200, protein: 4, carbs: 45, fat: 1 },
  roti: { calories:110, protein:3,  carbs:18, fat:3 },
  chapati: { calories:120, protein:3,  carbs:20, fat:3 },
  naan: { calories:260, protein:8,  carbs:40, fat:7 },
  paratha: { calories:300, protein:6,  carbs:35, fat:15 },
  dosa: { calories:170, protein:4,  carbs:28, fat:5 },
  idli: { calories:60,  protein:2,  carbs:12, fat:1 },
  vada: { calories:140, protein:4,  carbs:15, fat:7 },
  sambar: { calories:120, protein:6,  carbs:18, fat:3 },
  upma: { calories:200, protein:5,  carbs:30, fat:6 },
  poha:  { calories:180, protein:4,  carbs:32, fat:5 },
  khichdi: { calories:220, protein:8,  carbs:35, fat:6 },
  biryani: { calories:450, protein:20, carbs:55, fat:18 },
  pulao: { calories:350, protein:10, carbs:50, fat:12 },
  curd_rice: { calories:300, protein:8,  carbs:45, fat:8 },
  dal: { calories:180, protein:9,  carbs:24, fat:4 },
  rajma: { calories:240, protein:12, carbs:35, fat:6 },
  chole: { calories:260, protein:14, carbs:40, fat:7 },
  paneer: { calories:320, protein:14, carbs:10, fat:22 },
  paneer_butter_masala: { calories:420, protein:15, carbs:18, fat:30 },
  aloo_sabzi: { calories:180, protein:3,  carbs:30, fat:6 },
  bhindi: { calories:120, protein:3,  carbs:18, fat:4 },
  palak_paneer: { calories:350, protein:14, carbs:12, fat:25 },
  chicken_curry: { calories:300, protein:25, carbs:10, fat:18 },
  butter_chicken: { calories:450, protein:28, carbs:12, fat:32 },
  tandoori_chicken: { calories:260, protein:32, carbs:2, fat:12 },
  fish_curry: { calories:280, protein:22, carbs:6,  fat:18 },
  egg_curry: { calories:250, protein:14, carbs:8,  fat:18 },
  omelette: { calories:150, protein:10, carbs:2,  fat:11 },
  samosa: { calories:260, protein:5,  carbs:30, fat:14 },
  pakora: { calories:200, protein:6,  carbs:20, fat:12 },
  pav_bhaji: { calories:420, protein:10, carbs:55, fat:18 },
  vada_pav: { calories:290, protein:6,  carbs:35, fat:14 },
  pani_puri: { calories:180, protein:4,  carbs:28, fat:6 },
  bhel_puri: { calories:220, protein:5,  carbs:35, fat:7 },
  sev_puri: { calories:250, protein:6,  carbs:32, fat:10 },
  dhokla: { calories:160, protein:6,  carbs:24, fat:4 },
  thepla: { calories:200, protein:5,  carbs:30, fat:7 },
  litti_chokha:{ calories:300, protein:10, carbs:40, fat:10 },
  momos: { calories:280, protein:10, carbs:35, fat:10 },
  fried_rice: { calories:350, protein:8,  carbs:55, fat:12 },
  hakka_noodles:{ calories:380, protein:10, carbs:60, fat:14 },
  pizza_slice: { calories:285, protein:12, carbs:36, fat:10 },
  burger: { calories:350, protein:15, carbs:30, fat:18 },
  cheeseburger:{ calories:420, protein:18, carbs:33, fat:22 },
  fries: { calories:320, protein:4,  carbs:42, fat:15 },
  hot_dog: { calories:300, protein:11, carbs:33, fat:16 },
  pasta: { calories:400, protein:12, carbs:60, fat:10 },
  mac_and_cheese: { calories:450, protein:14, carbs:50, fat:22 },
  sandwich: { calories:280, protein:10, carbs:32, fat:12 },
  grilled_cheese: { calories:360, protein:12, carbs:30, fat:20 },
  salad: { calories:150, protein:5,  carbs:12, fat:8 },
  caesar_salad: { calories:320, protein:8,  carbs:18, fat:24 },
  steak: { calories:500, protein:40, carbs:0,  fat:35 },
  fried_chicken: { calories:420, protein:28, carbs:20, fat:24 },
  pancakes: { calories:350, protein:8,  carbs:50, fat:12 },
  waffles: { calories:400, protein:8,  carbs:52, fat:18 },
  oatmeal: { calories:150, protein:5,  carbs:27, fat:3 },
  cereal: { calories:200, protein:6,  carbs:40, fat:4 },
  milkshake: { calories:450, protein:10, carbs:55, fat:22 },
  ice_cream: { calories:250, protein:4,  carbs:30, fat:14 }
};

let totals = { calories: 0, protein: 0, carbs: 0, fat: 0 };
let history = [];

function addMeal() {
  const input = document.getElementById("foodInput");
  const food = input.value.toLowerCase().replace(/\s+/g, "_");


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
  addToHistory(food, meal.calories, "food list");

  input.value = "";
}

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
  addToHistory("Manual entry", calories, "manual");

  document.getElementById("mCalories").value = "";
  document.getElementById("mProtein").value = "";
  document.getElementById("mCarbs").value = "";
  document.getElementById("mFat").value = "";
}

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

    if (data.error) {
      alert(data.error);
      return;
    }

    const calories = Number(data.calories);
    const protein  = Number(data.protein);
    const carbs    = Number(data.carbs);
    const fat      = Number(data.fat);

    if (isNaN(calories)) {
      alert("AI returned invalid data");
      return;
    }

    totals.calories += calories;
    totals.protein  += protein;
    totals.carbs    += carbs;
    totals.fat      += fat;

    updateTotals();
    addToHistory(food, calories, "AI");

  } catch (e) {
    alert("Could not connect to AI backend");
  }
}

function updateTotals() {
  document.getElementById("tCalories").innerText = totals.calories;
  document.getElementById("tProtein").innerText  = totals.protein;
  document.getElementById("tCarbs").innerText    = totals.carbs;
  document.getElementById("tFat").innerText      = totals.fat;
}

function addToHistory(name, calories, source) {
  history.push({ name, calories, source });

  const list = document.getElementById("historyList");
  const li = document.createElement("li");

  li.innerText = `${name} - ${calories} kcal (${source})`;

  list.appendChild(li);
}

// Nutrition data per serving
const foodData = {

  rice:    { calories: 200, protein: 4, carbs: 45, fat: 1 },
  roti:    { calories:110, protein:3,  carbs:18, fat:3 },
  chapati: { calories:120, protein:3,  carbs:20, fat:3 },
  naan:    { calories:260, protein:8,  carbs:40, fat:7 },
  paratha: { calories:300, protein:6,  carbs:35, fat:15 },
  dosa:    { calories:170, protein:4,  carbs:28, fat:5 },
  idli:    { calories:60,  protein:2,  carbs:12, fat:1 },
  vada:    { calories:140, protein:4,  carbs:15, fat:7 },
  sambar:  { calories:120, protein:6,  carbs:18, fat:3 },
  upma:    { calories:200, protein:5,  carbs:30, fat:6 },
  poha:    { calories:180, protein:4,  carbs:32, fat:5 },
  khichdi: { calories:220, protein:8,  carbs:35, fat:6 },
  biryani: { calories:450, protein:20, carbs:55, fat:18 },
  pulao:   { calories:350, protein:10, carbs:50, fat:12 },
  curd_rice: { calories:300, protein:8,  carbs:45, fat:8 },
  dal:     { calories:180, protein:9,  carbs:24, fat:4 },
  rajma:   { calories:240, protein:12, carbs:35, fat:6 },
  chole:   { calories:260, protein:14, carbs:40, fat:7 },
  paneer:  { calories:320, protein:14, carbs:10, fat:22 },
  paneer_butter_masala: { calories:420, protein:15, carbs:18, fat:30 },
  aloo_sabzi: { calories:180, protein:3,  carbs:30, fat:6 },
  bhindi:  { calories:120, protein:3,  carbs:18, fat:4 },
  palak_paneer: { calories:350, protein:14, carbs:12, fat:25 },
  chicken_curry: { calories:300, protein:25, carbs:10, fat:18 },
  butter_chicken: { calories:450, protein:28, carbs:12, fat:32 },
  tandoori_chicken: { calories:260, protein:32, carbs:2, fat:12 },
  fish_curry: { calories:280, protein:22, carbs:6,  fat:18 },
  egg_curry: { calories:250, protein:14, carbs:8,  fat:18 },
  omelette:  { calories:150, protein:10, carbs:2,  fat:11 },
  samosa:    { calories:260, protein:5,  carbs:30, fat:14 },
  pakora:    { calories:200, protein:6,  carbs:20, fat:12 },
  pav_bhaji: { calories:420, protein:10, carbs:55, fat:18 },
  vada_pav:  { calories:290, protein:6,  carbs:35, fat:14 },
  pani_puri: { calories:180, protein:4,  carbs:28, fat:6 },
  bhel_puri: { calories:220, protein:5,  carbs:35, fat:7 },
  sev_puri:  { calories:250, protein:6,  carbs:32, fat:10 },
  dhokla:    { calories:160, protein:6,  carbs:24, fat:4 },
  thepla:    { calories:200, protein:5,  carbs:30, fat:7 },
  litti_chokha:{ calories:300, protein:10, carbs:40, fat:10 },
  momos:     { calories:280, protein:10, carbs:35, fat:10 },
  fried_rice: { calories:350, protein:8,  carbs:55, fat:12 },
  hakka_noodles:{ calories:380, protein:10, carbs:60, fat:14 },
  pizza_slice: { calories:285, protein:12, carbs:36, fat:10 },
  burger:    { calories:350, protein:15, carbs:30, fat:18 },
  cheeseburger:{ calories:420, protein:18, carbs:33, fat:22 },
  fries:     { calories:320, protein:4,  carbs:42, fat:15 },
  hot_dog:   { calories:300, protein:11, carbs:33, fat:16 },
  pasta:     { calories:400, protein:12, carbs:60, fat:10 },
  mac_and_cheese: { calories:450, protein:14, carbs:50, fat:22 },
  sandwich:  { calories:280, protein:10, carbs:32, fat:12 },
  grilled_cheese: { calories:360, protein:12, carbs:30, fat:20 },
  salad:     { calories:150, protein:5,  carbs:12, fat:8 },
  caesar_salad: { calories:320, protein:8,  carbs:18, fat:24 },
  steak:     { calories:500, protein:40, carbs:0,  fat:35 },
  fried_chicken: { calories:420, protein:28, carbs:20, fat:24 },
  pancakes:  { calories:350, protein:8,  carbs:50, fat:12 },
  waffles:   { calories:400, protein:8,  carbs:52, fat:18 },
  oatmeal:   { calories:150, protein:5,  carbs:27, fat:3 },
  cereal:    { calories:200, protein:6,  carbs:40, fat:4 },
  milkshake: { calories:450, protein:10, carbs:55, fat:22 },
  ice_cream: { calories:250, protein:4,  carbs:30, fat:14 }
};


const foodInput = document.getElementById("foodInput");
const suggestionsBox = document.getElementById("suggestionsBox");
const mealTypeFood = document.getElementById("mealTypeFood");
const noteFood = document.getElementById("noteFood");

const mCalories = document.getElementById("mCalories");
const mProtein = document.getElementById("mProtein");
const mCarbs = document.getElementById("mCarbs");
const mFat = document.getElementById("mFat");
const mealTypeManual = document.getElementById("mealTypeManual");
const noteManual = document.getElementById("noteManual");

const goalInput = document.getElementById("goalInput");
const goalText = document.getElementById("goalText");
const progressFill = document.getElementById("progressFill");

const tCalories = document.getElementById("tCalories");
const tProtein = document.getElementById("tProtein");
const tCarbs = document.getElementById("tCarbs");
const tFat = document.getElementById("tFat");

const sBreakfast = document.getElementById("sBreakfast");
const sLunch = document.getElementById("sLunch");
const sDinner = document.getElementById("sDinner");
const sSnack = document.getElementById("sSnack");

const pBreakfast = document.getElementById("pBreakfast");
const pLunch = document.getElementById("pLunch");
const pDinner = document.getElementById("pDinner");
const pSnack = document.getElementById("pSnack");

const historyList = document.getElementById("historyList");

let totals = { calories: 0, protein: 0, carbs: 0, fat: 0 };
let history = [];
let dailyGoal = null;
let activeFilter = "All";

let stats = {
  Breakfast: { calories: 0, protein: 0 },
  Lunch: { calories: 0, protein: 0 },
  Dinner: { calories: 0, protein: 0 },
  Snack: { calories: 0, protein: 0 }
};

function addMeal() {
  const key = foodInput.value.toLowerCase().replace(/\s+/g, "_");
  const mealType = mealTypeFood.value;
  const note = noteFood.value;

  if (!foodData[key]) {
    alert("Food not found in list");
    return;
  }

  const f = foodData[key];
  updateAll(key, f.calories, f.protein, f.carbs, f.fat, mealType, "food list", note);

  foodInput.value = "";
  noteFood.value = "";
  suggestionsBox.innerHTML = "";
}

function addManualMeal() {
  const c = Number(mCalories.value);
  const p = Number(mProtein.value);
  const cb = Number(mCarbs.value);
  const f = Number(mFat.value);
  const mealType = mealTypeManual.value;
  const note = noteManual.value;

  if (!c || !p || !cb || !f) {
    alert("Fill all fields");
    return;
  }

  updateAll("Manual entry", c, p, cb, f, mealType, "manual", note);

  mCalories.value = "";
  mProtein.value = "";
  mCarbs.value = "";
  mFat.value = "";
  noteManual.value = "";
}

function updateAll(name, c, p, cb, f, mealType, source, note) {
  totals.calories += c;
  totals.protein += p;
  totals.carbs += cb;
  totals.fat += f;

  stats[mealType].calories += c;
  stats[mealType].protein += p;

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  history.push({ name, c, mealType, source, time, note });

  render();
  save();
}

function render() {
  tCalories.innerText = totals.calories;
  tProtein.innerText = totals.protein;
  tCarbs.innerText = totals.carbs;
  tFat.innerText = totals.fat;

  sBreakfast.innerText = stats.Breakfast.calories;
  sLunch.innerText = stats.Lunch.calories;
  sDinner.innerText = stats.Dinner.calories;
  sSnack.innerText = stats.Snack.calories;

  pBreakfast.innerText = stats.Breakfast.protein;
  pLunch.innerText = stats.Lunch.protein;
  pDinner.innerText = stats.Dinner.protein;
  pSnack.innerText = stats.Snack.protein;

  historyList.innerHTML = "";

  history
    .filter(h => activeFilter === "All" || h.mealType === activeFilter)
    .forEach(h => {
      const li = document.createElement("li");
      li.innerText =
        `${h.time} - [${h.mealType}] ${h.name.replace(/_/g, " ")} - ${h.c} kcal` +
        (h.note ? `, ${h.note}` : "");
      historyList.appendChild(li);
    });

  updateGoalUI();
}

function setGoal() {
  const val = Number(goalInput.value);
  if (!val || val <= 0) {
    alert("Enter valid calorie goal");
    return;
  }
  dailyGoal = val;
  save();
  updateGoalUI();
}

function updateGoalUI() {
  if (!dailyGoal) {
    goalText.innerText = "No goal set";
    progressFill.style.width = "0%";
    return;
  }
  const percent = Math.min((totals.calories / dailyGoal) * 100, 100);
  goalText.innerText = `${totals.calories} / ${dailyGoal} kcal`;
  progressFill.style.width = percent + "%";
}

function filterHistory(type) {
  activeFilter = type;
  render();
}

function clearHistory() {
  totals = { calories: 0, protein: 0, carbs: 0, fat: 0 };
  history = [];
  dailyGoal = null;

  stats = {
    Breakfast: { calories: 0, protein: 0 },
    Lunch: { calories: 0, protein: 0 },
    Dinner: { calories: 0, protein: 0 },
    Snack: { calories: 0, protein: 0 }
  };

  save();
  render();
}

function exportHistory() {
  let csv = "Time,Meal,Calories,Type,Note\n";
  history.forEach(h => {
    csv += `${h.time},${h.name},${h.c},${h.mealType},${h.note || ""}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "desidiet.csv";
  a.click();
}

function showSuggestions() {
  const input = foodInput.value.toLowerCase();
  suggestionsBox.innerHTML = "";
  if (!input) return;

  Object.keys(foodData)
    .map(f => f.replace(/_/g, " "))
    .filter(f => f.startsWith(input))
    .slice(0, 6)
    .forEach(f => {
      const div = document.createElement("div");
      div.innerText = f;
      div.onclick = () => {
        foodInput.value = f;
        suggestionsBox.innerHTML = "";
      };
      suggestionsBox.appendChild(div);
    });
}

function save() {
  localStorage.setItem("totals", JSON.stringify(totals));
  localStorage.setItem("history", JSON.stringify(history));
  localStorage.setItem("stats", JSON.stringify(stats));
  localStorage.setItem("goal", dailyGoal);
}

function load() {
  totals = JSON.parse(localStorage.getItem("totals")) || totals;
  history = JSON.parse(localStorage.getItem("history")) || [];
  stats = JSON.parse(localStorage.getItem("stats")) || stats;
  dailyGoal = Number(localStorage.getItem("goal")) || null;
  render();
}

window.onload = load;
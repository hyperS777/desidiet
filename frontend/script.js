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

  // clear inputs
  document.getElementById("mCalories").value = "";
  document.getElementById("mProtein").value = "";
  document.getElementById("mCarbs").value = "";
  document.getElementById("mFat").value = "";
}

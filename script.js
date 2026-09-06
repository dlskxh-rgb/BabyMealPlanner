const foodInput = document.getElementById("foodInput");
const addFoodBtn = document.getElementById("addFoodBtn");
const foodList = document.getElementById("foodList");

const ingredientInput = document.getElementById("ingredientInput");
const addIngredientBtn = document.getElementById("addIngredientBtn");
const ingredientList = document.getElementById("ingredientList");

const allergyMemo = document.getElementById("allergyMemo");
const saveMemoBtn = document.getElementById("saveMemoBtn");
const saveMessage = document.getElementById("saveMessage");

const recommendBtn = document.getElementById("recommendBtn");
const recommendation = document.getElementById("recommendation");


// Load saved meals from LocalStorage
let foods = JSON.parse(localStorage.getItem("foods")) || [];

// Load saved ingredients from LocalStorage
let ingredients =
  JSON.parse(localStorage.getItem("ingredients")) || [];

// Load saved allergy notes
allergyMemo.value =
  localStorage.getItem("allergyMemo") || "";


// Display meals
function renderFoods() {

  foodList.innerHTML = "";

  foods.forEach((food, index) => {

    const li = document.createElement("li");

    li.innerHTML = `
      <span>${food}</span>
      <button
        class="delete-btn"
        onclick="deleteFood(${index})"
      >
        Delete
      </button>
    `;

    foodList.appendChild(li);

  });

}


// Delete a meal
function deleteFood(index) {

  foods.splice(index, 1);

  localStorage.setItem(
    "foods",
    JSON.stringify(foods)
  );

  renderFoods();

}


// Add a meal
addFoodBtn.addEventListener("click", () => {

  const food = foodInput.value.trim();

  if (food === "") {

    alert("Please enter a meal.");
    return;

  }

  foods.push(food);

  localStorage.setItem(
    "foods",
    JSON.stringify(foods)
  );

  foodInput.value = "";

  renderFoods();

});


// Display ingredients
function renderIngredients() {

  ingredientList.innerHTML = "";

  ingredients.forEach((ingredient, index) => {

    const li = document.createElement("li");

    li.innerHTML = `
      <span>${ingredient}</span>

      <button
        class="delete-btn"
        onclick="deleteIngredient(${index})"
      >
        Delete
      </button>
    `;

    ingredientList.appendChild(li);

  });

}


// Delete an ingredient
function deleteIngredient(index) {

  ingredients.splice(index, 1);

  localStorage.setItem(
    "ingredients",
    JSON.stringify(ingredients)
  );

  renderIngredients();

}


// Add an ingredient
addIngredientBtn.addEventListener("click", () => {

  const ingredient =
    ingredientInput.value.trim();

  if (ingredient === "") {

    alert("Please enter an ingredient.");
    return;

  }

  ingredients.push(ingredient);

  localStorage.setItem(
    "ingredients",
    JSON.stringify(ingredients)
  );

  ingredientInput.value = "";

  renderIngredients();

});


// Save allergy notes
saveMemoBtn.addEventListener("click", () => {

  localStorage.setItem(
    "allergyMemo",
    allergyMemo.value
  );

  saveMessage.textContent =
    "Saved successfully!";

  setTimeout(() => {

    saveMessage.textContent = "";

  }, 2000);

});


// Meal ideas
const mealIdeas = [

  "🥕 Carrot and potato soup",

  "🍚 Chicken and vegetable porridge",

  "🥦 Broccoli and egg omelet",

  "🍌 Banana oatmeal",

  "🐟 Salmon vegetable rice",

  "🎃 Pumpkin porridge",

  "🥔 Potato and carrot soup",

  "🍎 Apple yogurt oatmeal"

];


// Get a random meal idea
recommendBtn.addEventListener("click", () => {

  const randomIndex =
    Math.floor(
      Math.random() * mealIdeas.length
    );

  recommendation.textContent =
    mealIdeas[randomIndex];

});


// Initial page rendering
renderFoods();

renderIngredients();

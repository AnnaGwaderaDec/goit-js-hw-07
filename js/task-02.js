const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const ulIngredients = document.querySelector("#ingredients");

const ingredientsTable = [];

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  ingredientsTable.push(li);
});

ulIngredients.append(...ingredientsTable);

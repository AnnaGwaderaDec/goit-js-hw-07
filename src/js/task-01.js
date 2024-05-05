const categories = document.querySelectorAll("#categories .item");

console.log("Number of categories:  " + categories.length);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  console.log(`Category: ${categoryName}`);
  const listLenght = category.querySelectorAll("li").length;
  console.log(`Elements: ${listLenght}`); //zliczanie
});

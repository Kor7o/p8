import data from "../data/recipes.json" assert { type: "json" };
console.table(data);

const cards = document.querySelector(".card_section");
const filter = document.querySelector(".tag_section");

data.forEach((recipe) => {
	cards.innerHTML += `<article class='card' data-id='${recipe.id}'>
    <p class='card_time'> ${recipe.time} min </p> <img src='./images/recipes/${recipe.image}' alt='Limonade de Coco'>
    <div class='card_infos'>
        <h2>${recipe.name}</h2>
        <div class='card_infos_instructions'>
            <h3>Recette</h3>
            <p>${recipe.description}</p>
        </div>
        <div class='card_infos_ingredients'>
            <h3>Ingrédients</h3>
            <ul>
            ${recipe.ingredients.map(ingr=>`<li><span>${ingr.ingredient}</span></li>`)}
            </ul>
        </div>
    </div>
</article>`;
});


data.forEach((tag) => {
	filter.innerHTML += `<div class="filter_section">
    <div class="dropdown_wrapper">
      <div class="dropdown">
        <select class="dropdown_btn" type="button">
            <option>
            <ul class="dropdown_content_list">
            ${tag.ingredients.map(ingr=>`<li><span>${ingr.ingredient}</span></li>`)}
            <ul>
            </option>
            
        </select>
        <div class="dropdown_content">
          <div>
            <input type="text" id="search-Ingrédients" maxlength="12">
          </div>
        </div>
      </div>
    </div>
  </div>`;
});
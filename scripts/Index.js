import data from "../data/recipes.json" assert { type: "json" };

const cards = document.querySelector(".card_section");
const drop_ingredient = document.querySelector("#list_ingredient");
const drop_ustensils = document.querySelector("#list_ustensils");
const drop_appliance = document.querySelector("#list_appliance");

data.forEach((recipe) => {
  cards.innerHTML += `<article class='card' data-id='${recipe.id}'>
    <p class='card_time'> ${recipe.time} min </p> <img src='./images/recipes/${
    recipe.image
  }' alt='Limonade de Coco'>
    <div class='card_infos'>
        <h2>${recipe.name}</h2>
        <div class='card_infos_instructions'>
            <h3>Recette</h3>
            <p>${recipe.description}</p>
        </div>
        <div class='card_infos_ingredients'>
            <h3>Ingrédients</h3>
            <ul>
            ${recipe.ingredients.map(
              (ingr) => `<li><span>${ingr.ingredient}</span></li>`
              )}
            </ul>
        </div>
    </div>
</article>`;
});


//1eme dropdown//

const filter = new Set();

data.forEach((recipe) => {
  recipe.ingredients.forEach((ingr) => filter.add(ingr.ingredient));
});

const sorted = Array.from(filter).sort();
console.log(sorted);

sorted.forEach((ingr) => {
  drop_ingredient.innerHTML += `<option>${ingr}</option>`;
});

//2eme dropdown//

const filter_ustensils = new Set();

data.forEach((recipe) => {
  recipe.ustensils.forEach((ust) => filter_ustensils.add(ust));
});

const sorted_ustensils = Array.from(filter_ustensils).sort();

sorted_ustensils.forEach((appl) => {
  drop_ustensils.innerHTML += `<option>${appl}</option>`;
});

//3eme dropdown//

const filter_appliance = new Set();

data.forEach((recipe) => {
  filter_appliance.add(recipe.appliance);
});

const sorted_appliance = Array.from(filter_appliance).sort();

sorted_appliance.forEach((appl) => {
  drop_appliance.innerHTML += `<option>${appl}</option>`;
});


//Tags//

const options = document.querySelectorAll("option")
console.table(options)

options.forEach((opt) =>{
  opt.addEventListener("click", () => {
console.log("test")
  })
})
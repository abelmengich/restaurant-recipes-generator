document.addEventListener('DOMContentLoaded', function() {

const API_BASE = "https://api.spoonacular.com/recipes"; 
const API_KEY = "758b594da0dd4399b8869408f5674ae2";
var  counter = 0;

let ingredients ;

/* Function to fetch Recipes By ingredients */
 /* Starting with default given value */
async function findByIngdredients(){
    
    let ingredients = "apples,+flour,+sugar";

    const response = await fetch(`${API_BASE}/findByIngredients?ingredients=${ingredients}&number=9&apiKey=${API_KEY}`);
    listRecipes = await response.json();


    listRecipes.map(
        function(element){
          counter++;
            document.getElementById("recipes-container").innerHTML += `<div class="recipe-card">
                <h2>${element.title}</h2>
                <img src="${element.image}" width="100%" height="100%"/>
                <button id="showPopup${counter}" class="button-details ">More details</button>
            </div>`;
            
        }
    );
}


/*  Modal Recipes Details */

const wrapper = document.getElementById('wrapper');

wrapper.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  console.dir(event.target.id);
})

findByIngdredients();


});
document.addEventListener('DOMContentLoaded', function() {

const API_BASE = "https://api.spoonacular.com/recipes"; 
const API_KEY = "f01c2ae708b445da83e044d46ad551c7";


let ingredients ;

/* Function to fetch Recipes By ingredients */
 /* Starting with default given value */
async function findByIngdredients(){
    
    let ingredients = "apples,+flour,+sugar";

    const response = await fetch(`${API_BASE}/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${API_KEY}`);
    listRecipes = await response.json();


    listRecipes.map(
        function(element){
            
            document.getElementById("recipes-container").innerHTML += `<div class="recipe-card"><a href="#"><h2>"${element.title}"</h2><img src="${element.image}"/></a></div>`;
            console.log(element);
        }
    );
}

findByIngdredients();
console.log("hello world");

});


document.addEventListener('DOMContentLoaded', function() {

const API_BASE = "https://api.spoonacular.com/recipes"; 
const API_KEY = "";


let ingredients ;

/* Function to fetch Recipes By ingredients */
 /* Starting with default given value */
async function findByIngdredients(){
    
    let ingredients = "apple,flour,sugar";
    const response = await fetch(`${API_BASE}/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${API_KEY}`);
    listRecipes = await response.json();
    console.log(listRecipes);
}

findByIngdredients();

});


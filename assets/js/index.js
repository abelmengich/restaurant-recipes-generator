document.addEventListener('DOMContentLoaded', function() {

const API_BASE = "https://api.spoonacular.com/recipes"; 
const API_KEY = "758b594da0dd4399b8869408f5674ae2";


let ingredients ;

/* Function to fetch Recipes By ingredients */
 /* Starting with default given value */
async function findByIngdredients(){
    
    let ingredients = "apples,+flour,+sugar";

    const response = await fetch(`${API_BASE}/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${API_KEY}`);
    listRecipes = await response.json();


    listRecipes.map(
        function(element){
            
            // document.getElementById("recipes-container").innerHTML += `<div class="recipe-card "><a href="#"><h2>"${element.title}"</h2><img src="${element.image}"/></a></div><br/><button >More details</button>`;
           
           
            document.getElementById("recipes-container").innerHTML += `<div
            style="margin: 15px; height: 100%;  width: 260px;  overflow: hidden; display: flex; flex-direction: column;  justify-content: space-between">
                <img style="object-fit : cover; width: 100%; border: 1px #cecece solid; border-radius: 10px;"
                    src=${element.image}"/>

                <button class="button-details ">Recipe details</button>
            </div>`;
            console.log(element);
        }
    );
}

findByIngdredients();
console.log("hello world");

});
document.addEventListener('DOMContentLoaded', function() {

const API_BASE = "https://api.spoonacular.com/recipes"; 
const API_KEY = "c463d5183a064d5795b3d3defa38193a";
var  counter = 0;


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
                <button id="showPopup${counter}" class="button-details jsModalTrigger">More details</button>
            </div>`;
            
        }
    );

    //console.log(JSON.parse(localStorage.getItem("banga")));

}


/* Multiple Search Form */


function handleSearchInputKeyDown(e) {
  let anotherBanger = " ";


  localStorage.removeItem('banga');
  findByIngdredients(localStorage)

  if (e.key === 'Enter') {
    e.preventDefault();
    let ingredientsList = this.value;
    /*ingredientsList.split(" ").forEach(ingredient => {

      anotherBanger += ingredient + ",+";
      
    }); */
    anotherBanger = ingredientsList.split(" ").join(",+");

    this.value = " ";
     // Storing for a short time the currrent serach in a windowd local storage
    localStorage.setItem("banga", JSON.stringify(anotherBanger));
  }

 
}


document.getElementById('search-input').onkeydown = handleSearchInputKeyDown;


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
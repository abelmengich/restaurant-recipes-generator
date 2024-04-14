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
                <button id="showPopup${counter}" class="button-details jsModalTrigger">More details</button>
            </div>`;
            
        }
    );
}


/*  Modal Recipes Details */
 /* Opening modal window function */
 function openModal() {
  /* Get trigger element */
  var modalTrigger = document.getElementsByClassName('jsModalTrigger');

  /* Set onclick event handler for all trigger elements */
  for(var i = 0; i < modalTrigger.length; i++) {
      modalTrigger[i].onclick = function() {
        var target = this.getAttribute('href').substr(1);
        var modalWindow = document.getElementById(target);

        modalWindow.classList ? modalWindow.classList.add('open') : modalWindow.className += ' ' + 'open'; 
      }
  }   
}

function closeModal(){
/* Get close button */
var closeButton = document.getElementsByClassName('jsModalClose');
var closeOverlay = document.getElementsByClassName('jsOverlay');

/* Set onclick event handler for close buttons */
  for(var i = 0; i < closeButton.length; i++) {
    closeButton[i].onclick = function() {
      var modalWindow = this.parentNode.parentNode;

      modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }   

/* Set onclick event handler for modal overlay */
  for(var i = 0; i < closeOverlay.length; i++) {
    closeOverlay[i].onclick = function() {
      var modalWindow = this.parentNode;

      modalWindow.classList ? modalWindow.classList.remove('open') : modalWindow.className = modalWindow.className.replace(new RegExp('(^|\\b)' + 'open'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }  

}


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
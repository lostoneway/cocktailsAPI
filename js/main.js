//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

//set up event listener on the click to run our getDrink function 
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
  //grab drink from input
  let drink = document.querySelector('input').value.toLowerCase();
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks);
      //make function to grab new drink on refresh  
      refresh(data.drinks);
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

function refresh(drinks){
  let counter = 0 
  let interval = setInterval(function(){
    // console.log(drinks[counter].strDrink);
    if(drinks[counter].strDrink !== null){
      document.querySelector('h2').innerText = drinks[counter].strDrink;
    }
    // console.log(drinks[counter].strDrinkThumb);
    if(drinks[counter].strDrink !== null){
      document.querySelector('img').src = drinks[counter].strDrinkThumb;
    }
    // console.log(drinks[counter].strInstructions);
    if(drinks[counter].strDrink !== null){
      document.querySelector('p').innerText = drinks[counter].strInstructions;
    }
    // console.log(counter);
    if(counter == drinks.length -1){
      clearInterval(interval); 
    }
    counter++; 
  },2500)
}
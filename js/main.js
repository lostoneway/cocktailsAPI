//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM\

//set up event listener on the click to run our getDrink function 
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
  //grab drink from input
  let drink = document.querySelector('input').value
.toLowerCase()
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      //place drink name, thumbnail and instructions into DOM 
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('p').innerText = data.drinks[0].strInstructions

      //loop through array 
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}
    
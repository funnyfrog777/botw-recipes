import './App.css';
import './fonts/HyliaSerifBeta-Regular.otf';
import { useState } from 'react';
import recipeData from './assets/recipes.json'
import MealItem from './components/MealItem';
import Filter from './components/Filter';

recipeData.recipes.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/images/" + item.image;
});
recipeData.ingredients.sort();

function App() {
  const [ingredients, setIngredients] = useState(new Array(recipeData.ingredients.length).fill(true));
  const [isAllClicked, setIsAllClicked] = useState(true);
  const handleAllClick = () => {
    // TODO
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Breath of the Wild Recipes</h1>
      </header>
      <body className="App-body">
        <div className="Filter-display">
          <fieldset>
            <legend>Ingredients</legend>
            <div>
              <input type="checkbox" id="All Ingredients" name="All Ingredients" defaultChecked={isAllClicked} onClick={handleAllClick}/>
              <label for="All Ingredients" className="small-font"> All Ingredients </label>
            </div>
            {recipeData.ingredients.map((item, index) => (
              <Filter index={index} name={item} ingredients={ingredients} setIngredients={setIngredients}/>
            ))}
          </fieldset>
        </div>
        <div className="Recipe-display">
          {recipeData.recipes.map((item, index) => {
            if (ingredients.every(i=> i === true)) {
            // if (item.ingredients.every(i=> ingredients[recipeData.ingredients.indexOf(i)])) {
              // console.log(ingredients);
              // console.log(recipeData.recipes[0].name);
              // console.log(recipeData.recipes[0].ingredients);
              // console.log(recipeData.recipes[0].ingredients.every(i=> ingredients[recipeData.ingredients.indexOf(i)]));
              return <MealItem img={item.image} name={item.name} desc={item.desc} resale={item.resale} ingredients={item.ingredients}/>
            }
          })}
        </div>
        <br/>
      </body>
    </div>
  );
}

export default App;
import './App.css';
import './fonts/HyliaSerifBeta-Regular.otf';
import { useState } from 'react';
import recipeData from './assets/recipes.json'
import MealItem from './components/MealItem';
import CheckBox from './components/CheckBox';
import Slider from './components/Slider';

recipeData.recipes.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/images/" + item.image;
});
recipeData.ingredients.sort();

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [cart, setCart] = useState({});
  const handleAllClick = () => {
    if (recipeData.ingredients.every(i=> ingredients.includes(i))) {
      setIngredients([]);
    } else {
      setIngredients(recipeData.ingredients);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Breath of the Wild Recipes</h1>
      </header>
      <body className="App-body">
        {/* Cart */}
        <div className='Cart'>
          <span>Cart</span>
          {Object.keys(cart).length === 0 ? (
            <i className='small-font'>No recipes added</i>
          ) : 
          (Object.entries(cart).map(([key, value]) => {
            return <p className='small-font'>{key} (x{value})</p>
          }))}
        </div>
        {/* Filters */}
        <div className="Filter-display">
          <fieldset>
            <legend>Ingredients</legend>
            <div>
              <input type="checkbox" id="All" name="All" onClick={handleAllClick}/>
              <label for="All" className="small-font"> All Ingredients </label>
            </div>
            {recipeData.ingredients.map((item, index) => (
              <CheckBox name={item} ingredients={ingredients} setIngredients={setIngredients}/>
            ))}
          </fieldset>
        </div>
        {/* Recipes */}
        <div className="Recipe-display">
          {recipeData.recipes.map((item, index) => {
            if (item.ingredients.every(i=> ingredients.includes(i))) {
              return <MealItem img={item.image} name={item.name} desc={item.desc} resale={item.resale} ingredients={item.ingredients} cart={cart} setCart={setCart}/>
            } else {
              return;
            }
          })}
        </div>
        <br/>
      </body>
    </div>
  );
}

export default App;
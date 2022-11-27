import './App.css';
import './fonts/HyliaSerifBeta-Regular.otf';
import { useState } from 'react';
import recipeData from './assets/recipes.json'
import MealItem from './components/MealItem';
import CheckBox from './components/CheckBox';
import Slider from './components/Slider';
import Rupee from './components/Rupee'

recipeData.recipes.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/images/" + item.image;
});
recipeData.ingredients.sort();

function App() {
  const [ingredients, setIngredients] = useState(recipeData.ingredients);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(158);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [sort, setSort] = useState(true); // sort === true ? low-to-high : high-to-low

  const handleClick = (name, resale) => {
    var temp = [...cart];
    var index = temp.indexOf(name);
    if (index !== -1) {
      temp.splice(index, 1);
      setCart(temp);
      setTotal(Number(total) - Number(resale));
    }
  };

  const handleClearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const handleClearFilters = () => {
    setMin(0);
    document.getElementById("minSlider").value = 0;
    setMax(158);
    document.getElementById("maxSlider").value = 158;
    setIngredients(recipeData.ingredients);
    recipeData.ingredients.map((item, index) => {
      return document.getElementById(item).checked = true;
    })
    setSort(true);

  };

  const handleSelectAll = () => {
    setIngredients(recipeData.ingredients);
    recipeData.ingredients.map((item, index) => {
      return document.getElementById(item).checked = true;
    })
  }

  const handleDeselectAll = () => {
    setIngredients([]);
    recipeData.ingredients.map((item, index) => {
      return document.getElementById(item).checked = false;
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Breath of the Wild Recipes</h1>
      </header>
      <body className="App-body">
        {/* Cart */}
        <div className='Cart'>
          <p className='center'>Recipes to Make</p>
          {cart.map((item, index) => {
            const temp = recipeData.recipes.find(recipe => { return recipe.name === item; })
            return <span className='small-font right-align'>
              <button className='button-2' onClick={e => handleClick(item, temp.resale)}>x <img className="icon" src={temp.image} alt={item}/></button>
              {item} . . . . . <Rupee/> {temp.resale}
              </span>
          })}
          {cart.length === 0 ? 
            <i className='small-font center'>No recipes added</i> : 
            <p className='label right-align'>
              Total Resale: <Rupee/> {total} <br/>
              <button className='button-3' onClick={handleClearCart}>Clear Recipes</button>
            </p>}
        </div>
        {/* Filters */}
        <button className='button-4' onClick={handleClearFilters}>Reset Filters</button> {/* RESET */}
        <div className="Filter-display-row">
          <fieldset>
            <button className='button-5' onClick={handleSelectAll}>Select All</button>
            <button className='button-5' onClick={handleDeselectAll}>Deselect All</button>
            <legend>Ingredients</legend> {/* INGREDIENTS */}
            {recipeData.ingredients.map((item, index) => (
              <CheckBox id={item} name={item} ingredients={ingredients} setIngredients={setIngredients}/>
              ))}
          </fieldset>
          <div className='Filter-display-col'>
            <fieldset>
              <legend>Resale</legend> {/* RESALE */}
              <span className="small-font">Minimum: <Rupee/> {min}</span>
              <Slider id={"minSlider"} val={min} setVal={setMin} lowerBound={0} upperBound={max}/><br/>
              <span className="small-font">Maximum: <Rupee/> {max}</span>
              <Slider id={"maxSlider"} val={max} setVal={setMax} lowerBound={min} upperBound={158}/><br/><br/>
            </fieldset>
            <fieldset>
              <legend>Sort By</legend> {/* SORT BY */}
              <div onChange={(event) => setSort(event.target.value === "cheapest" ? true : false)}>
                <input type='radio' name="cheapest" value="cheapest" checked={sort}/><label for="cheapest" className="small-font"> Low to High </label><br/>
                <input type='radio' name="expensive" value="expensive" checked={!sort}/><label for="expensive" className="small-font"> High to Low </label>
              </div>
            </fieldset>
          </div>
        </div>
        {/* Recipes */}
        <div className="Recipe-display">
          {recipeData.recipes.sort((a, b) => a.name > b.name).sort((a, b) => sort ? Number(a.resale) > Number(b.resale) : Number(a.resale) < Number(b.resale)).map((item, index) => {
            if (item.ingredients.every(i=> ingredients.includes(i)) && Number(item.resale) >= min && Number(item.resale) <= max) {
              return <MealItem img={item.image} name={item.name} desc={item.desc} resale={item.resale} ingredients={item.ingredients} cart={cart} setCart={setCart} total={total} setTotal={setTotal}/>
            } else {
              return null;
            }
          })}
        </div>
        <br/>
      </body>
    </div>
  );
}

export default App;
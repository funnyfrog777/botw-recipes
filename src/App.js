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
  const [ingredients, setIngredients] = useState(recipeData.ingredients);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(120);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [sort, setSort] = useState(true); // sort === true ? low-to-high : high-to-low
  // const handleAllClick = () => {
  //   if (recipeData.ingredients.every(i=> ingredients.includes(i))) {
  //     setIngredients([]);
  //   } else {
  //     setIngredients(recipeData.ingredients);
  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Breath of the Wild Recipes</h1>
      </header>
      <body className="App-body">
        {/* Cart */}
        <div className='Cart'>
          <p className='center'>Cart</p>
          {cart.map((item, index) => {
            const temp = recipeData.recipes.find(recipe => { return recipe.name === item; })
            return <span className='small-font right-align'>
              <img className="icon" src={temp.image} alt={"image of "+item}/> {item} . . . <img className="icon" src="images/Rupee.png" alt={"image of Rupee"}/> {temp.resale}
              </span>
          })}
          {cart.length === 0 ? <i className='small-font center'>No recipes added</i> : <p className='small-font right-align'>Total Resale: <img className="icon" src="images/Rupee.png" alt={"image of Rupee"}/> {total}</p>}
        </div>
        {/* Filters */}
        <div className="Filter-display">
          <fieldset>
            <legend>Ingredients</legend>
            {/* <div>
              <input type="checkbox" id="All" name="All" onClick={handleAllClick} defaultChecked={true}/>
              <label for="All" className="small-font"> All Ingredients </label>
            </div> */}
            {recipeData.ingredients.map((item, index) => (
              <CheckBox name={item} ingredients={ingredients} setIngredients={setIngredients}/>
            ))}
          </fieldset>
          <fieldset>
            <legend>Resale</legend>
            <span className="small-font">Minimum: <img className="icon" src="images/Rupee.png" alt={"image of Rupee"}/> {min}</span>
            <Slider val={min} setVal={setMin} lowerBound={0} upperBound={max}/><br/>
            <span className="small-font">Maximum: <img className="icon" src="images/Rupee.png" alt={"image of Rupee"}/> {max}</span>
            <Slider val={max} setVal={setMax} lowerBound={min} upperBound={120}/><br/><br/>
            <span className="small-font">Sort by:</span><br/>
            <div onChange={(event) => setSort(event.target.value === "cheapest" ? true : false)}>
              <input type='radio' name="cheapest" value="cheapest" checked={sort}/><label for="cheapest" className="small-font"> Low to High </label><br/>
              <input type='radio' name="expensive" value="expensive" checked={!sort}/><label for="expensive" className="small-font"> High to Low </label>
            </div>
          </fieldset>
        </div>
        {/* Recipes */}
        <div className="Recipe-display">
          {recipeData.recipes.sort((a, b) => sort ? Number(a.resale) > Number(b.resale) : Number(a.resale) < Number(b.resale)).map((item, index) => {
            if (item.ingredients.every(i=> ingredients.includes(i)) && item.resale >= min && item.resale <= max) {
              return <MealItem img={item.image} name={item.name} desc={item.desc} resale={item.resale} ingredients={item.ingredients} cart={cart} setCart={setCart} total={total} setTotal={setTotal}/>
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
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

  const [sortType, setSortType] = useState("val"); // {"val":valSort} {"name", nameSort}
  const [valSort, setValSort] = useState(true); //   valSort === true ? low-to-high : high-to-low
  const [nameSort, setNameSort] = useState(true); // nameSort == true ? A-Z : Z-A

  const handleClearFilters = () => {
    setMin(0);
    document.getElementById("minSlider").value = 0;
    setMax(158);
    document.getElementById("maxSlider").value = 158;
    setIngredients(recipeData.ingredients);
    recipeData.ingredients.map((item, index) => {
      return document.getElementById(item).checked = true;
    })
    setValSort(true);

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
              <p className='sub-header'>Price</p>
              <div onChange={(event) => {setValSort(event.target.value === "cheapest" ? true : false); setSortType("val")}}>
                <input type='radio' name="cheapest" value="cheapest" checked={valSort && sortType === "val"}/><label for="cheapest" className="small-font"> Low to High </label><br/>
                <input type='radio' name="expensive" value="expensive" checked={!valSort && sortType === "val"}/><label for="expensive" className="small-font"> High to Low </label>
              </div>
              <br/>
              <p className='sub-header'>Name</p>
              <div onChange={(event) => {setNameSort(event.target.value === "A-Z" ? true : false); setSortType("name")}}>
                <input type='radio' name="A-Z" value="A-Z" checked={nameSort && sortType === "name"}/><label form='A-Z' className='small-font'> A-Z </label><br/>
                <input type='radio' name="Z-A" value="Z-A" checked={!nameSort && sortType === "name"}/><label form='Z-A' className='small-font'> Z-A </label>
              </div>
            </fieldset>
          </div>
        </div>
        {/* Recipes */}
        <div className="Recipe-display">
          {sortType === "val" ?
            recipeData.recipes.sort((a, b) => a.name > b.name).sort((a, b) => valSort ? Number(a.resale) > Number(b.resale) : Number(a.resale) < Number(b.resale)).map((item, index) => {
              if (item.ingredients.every(i=> ingredients.includes(i)) && Number(item.resale) >= min && Number(item.resale) <= max) {
                return <MealItem img={item.image} name={item.name} desc={item.desc} resale={item.resale} ingredients={item.ingredients}/>
              } else {
                return null;
              }
            }) :
            recipeData.recipes.sort((a, b) => nameSort ? a.name > b.name : b.name > a.name).map((item, index) => {
              return <MealItem img={item.image} name={item.name} desc={item.desc} resale={item.resale} ingredients={item.ingredients}/>
            })
          }
        </div>
        <br/>
      </body>
    </div>
  );
}

export default App;
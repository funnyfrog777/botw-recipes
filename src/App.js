import './App.css';
import './fonts/HyliaSerifBeta-Regular.otf';
import { useState } from 'react';
import recipeData from './assets/recipes.json'
import MealItem from './components/MealItem';

recipeData['recipes'].forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/images/" + item.image;
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Breath of the Wild Recipes</h1>
      </header>
      <body className="App-body">
        <br/>
        <div className="Filter-display">

        </div>
        <div className="Recipe-display">
          {recipeData['recipes'].map((item, index) => (
            <MealItem img={item.image} name={item.name} desc={item.desc} resale={item.resale} ingredients={item.ingredients}/>
          ))}
        </div>
        <br/>
      </body>
    </div>
  );
}

export default App;
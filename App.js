import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile';
import React from 'react';

function App() {

  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  // const [healthLabels, sethealthLabels] = useState("vegan")

  const YOUR_APP_ID = "57f184c4";
  const YOUR_APP_KEY = "fedd437b47364754ec37d140f5694b8d";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="app">
      <h2> Food Recipe Plaza With Soumyajit 🥧</h2>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input type="text" className="app__input" placeholder="Enter ingridient" value={query} onChange={(e) => setquery(e.target.value)} />
        <input type="submit" className="app__submit" value="Search" />

        {/* <select className="app_healthLabels">
          <option onClick={() => sethealthLabels("vegan")}>Vegan</option>
          <option onClick={() => sethealthLabels("paleo")}>paleo</option>
          <option onClick={() => sethealthLabels("dairy-free")}>dairy-free</option>
          <option onClick={() => sethealthLabels("gluten-free")}>gluten-free</option>
          <option onClick={() => sethealthLabels("wheat-free")}>wheat-free</option>
          <option onClick={() => sethealthLabels("fat-free")}>fat-free</option>
          <option onClick={() => sethealthLabels("low-sugar")}>low-sug </option>
          <option onClick={() => sethealthLabels("egg-free")}>egg-free</option>
          <option onClick={() => sethealthLabels("peanut-free")}>peanut-free</option>
          <option onClick={() => sethealthLabels("tree-nut-free")}>tree-nut-free</option>
          <option onClick={() => sethealthLabels("soy-free")}>soy-free</option>
          <option onClick={() => sethealthLabels("fish-free")}>fish-free</option>
          <option onClick={() => sethealthLabels("shellfish-free")}>shellfish-free</option>
        </select> */}
      </form>

      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />
        })}
      </div>
    </div >
  );
}
export default App;

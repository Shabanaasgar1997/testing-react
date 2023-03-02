import React, { useState } from "react";

import Axios from "axios";

const FoodSearch = () => {
  const YOUR_APP_ID = "f14eb44c";
  const YOUR_APP_KEY = "82d6e62099ee58d8200ba73c4dfa37a7";

  //query is used to print data
  //update is done with setvariable

  const [recipe, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [label, setLabel] = useState("vegan");


  const URL = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=${label}`


  const getShravaniImmediately = async () => {
    let RecipeDetails = await Axios.get(URL);
    setRecipes(RecipeDetails.data.hits);
    console.log(RecipeDetails.data.hits);
  }

  const pavanKalyan = (e) => {
    e.preventDefault();
    console.log('hey shravani');
    getShravaniImmediately();
  }


  return (
    <>
      <div className="display-1">hey this is food search app</div>

      <div className="container">
        <form className="d-flex justify-content-center"
          onSubmit={pavanKalyan}>
          {/*user=potato filter=vegetarian */}
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} className="form-control w-25" />

          <select name="" id="" className="form-control w-25">
            <option value="Vegan" onClick={(e) => setLabel("vegan")}>Vegan</option>
            <option value="low-sugar" onClick={(e) => setLabel("low-sugar")}>low-sugar</option>
            <option value="vegetarian" onClick={(e) => setLabel("vegetarian")}>vegetarian</option>
            <option value="keto-friendly" onClick={(e) => setLabel("keto-friendly")}>keto-friendly</option>
            <option value="gluten-free" onClick={(e) => setLabel("gluten-free")}>gluten-free</option>
            <option value="dairy-free" onClick={(e) => setLabel("dairy-free")}>dairy-free</option>
          </select>

          <button className="btn btn-success" type="submit">Get Data</button>
        </form>
      </div>
      <div className="container">
        {recipe.map((recipeitem) => {
          return (<>
            {recipeitem['recipe']['label']}
            <img src={recipeitem['recipe']['image']} />
            <p>

              {recipeitem['recipe']['calories']}


            </p>

          </>)
        })}

      </div>
    </>
  );
};

export default FoodSearch;

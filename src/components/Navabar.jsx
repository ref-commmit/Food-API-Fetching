import React, { useEffect, useState } from "react";
import "./Navbar.css";
import SearchBar from "./SearchBar";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "228770b99e7948ed9e8c7c71080ac13c";

const Navabar = ({ foodData, setFoodData }) => {
  const [input, setInput] = useState("pasta");

  function handleChange(e) {
    setInput(e.target.value)
  }

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${input}&apiKey=${API_KEY}`);
      const data = await res.json();
      // console.log(res.results);
      setFoodData(data.results);
    }    fetchFood();
  }, [input]);

  return (
    <div className="navar">
      <div className="logo">🍕FOOD COURT</div>
      <SearchBar handleChange={handleChange} input={input} />
      <div className="btn">
        <div className="btn-1">
          <button style={{ height: "30px", borderRadius: "5px" }}>LOGIN</button>
        </div>
        <div className="btn-2">
          <button style={{ height: "30px", borderRadius: "5px" }}>
            SIGN UP
          </button>
        </div>
        
      </div>
  

    </div>
  );
};

export default Navabar;

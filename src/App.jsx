import { useState } from "react";
import "./App.css";
import FoodList from "./components/FoodList";
import Navabar from "./components/Navabar";

function App() {

  const [foodData,setFoodData] = useState([])
  return (
    <div>
    
    <Navabar foodData={foodData} setFoodData={setFoodData}/>
 
   
    <FoodList foodData={foodData} setFoodData={setFoodData} />
   
    
    </div>
  );
}

export default App;

import React from "react";
import "./FoodList.css";

const FoodList = ({ foodData =[] }) => {
  return (
    <>
      <div className="container">
        {foodData.map((food) => (
          <div className="food-container">
            <img src={food.image} alt="" style={{ width: "100%" }} />
            <h1>{food.title}</h1> <button style={{marginBottom:"10px", height: '25px'}}>ADD</button>
          </div>
        ))}
      </div>

      <div>
        <p style={{ color: "black" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          excepturi vitae. Odio dolor consequatur illum, maxime laborum
          adipisci! Nobis iure quos quidem cumque qui velit nam hic voluptate
          ipsa soluta?
        </p>
      </div>
    </>
  );
};

export default FoodList;

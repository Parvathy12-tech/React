import React from "react";

function FavoriteFoods() {

  const foods = ["Pizza", "Burger", "Ice Cream", "Dosa", "Pasta"];

  function showMessage(food) {
    document.getElementById("message").innerText = "I love " + food + "!";
  }

  return (
    <div>
      <h2>My Favorite Foods</h2>

      <ul>
        {foods.map((food, index) => (
          <li key={index}>
            {food}
            <button onClick={() => showMessage(food)}>
              Click Me
            </button>
          </li>
        ))}
      </ul>

      <h3 id="message">Select a food that you love!</h3>
    </div>
  );
}

export default FavoriteFoods;
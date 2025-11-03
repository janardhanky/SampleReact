// RecipeCard.jsx
import React, { useState } from "react";
import { Like } from "./App";
//import { Example } from "./App";


function RecipeCard({ item }) {
  // State for like functionality
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <div className="recipe-card" style={{border: "1px solid #ccc", padding: "16px", margin: "8px", width: "280px"}}>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} style={{width: "100%", height: "180px", objectFit: "cover"}} />
      <p>Time: {item.time} min</p>
      <ul>
        <li>{item.info1}</li>
        <li>{item.info2}</li>
        <li>{item.info3}</li>
      </ul>
      <button onClick={handleLike} style={{
        background: liked ? "#e63946" : "#555",
        color: "#fff",
        padding: "8px 16px",
        border: "none",
        borderRadius: "4px",
        marginTop: "8px"
      }}>
        {liked ? "♥ Liked" : "♡ Like"} ({likes})
      </button>

      
    
    </div>
  );
}

export default RecipeCard;

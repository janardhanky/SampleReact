// App.jsx
import React, { useState } from "react";
import { recipes } from "./data";
import RecipeCard from "./RecipeCard";


export default function App() {
    return (
        <div>
            <h1 className="heading-1">My Restaurant Recipes</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                {recipes.map((item) => (
                    <RecipeCard key={item.id} item={item} />

                ))}

            </div>

        </div>
    );
}

 export function Like() {
    const [ count,LikeCounter]= useState(0);
    return(
        <div>
            <button onClick={ ()=>{LikeCounter(count+1);}}>
                click
            </button>
        </div>
    );
}

 //export function Example(){
   // <div> 
     //   <button onClick={alert("this is a button")}> click here</button>
    //</div>
//}


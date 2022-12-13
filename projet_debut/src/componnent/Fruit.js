import React from "react";

function fruit() {
    const arrayFruit = ["banane", "pomme", "fraise", "orange"]; 
    return (
    <div>
        <h1>Qu'est ce que j'ai dans mon panier ?</h1>
        <p>{arrayFruit.map(fruit => <li>Dans mon panier j'ai une {fruit}</li>)}</p>
    </div>
    )
}

export default fruit
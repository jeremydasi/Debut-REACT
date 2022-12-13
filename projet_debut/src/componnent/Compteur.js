import React, {useState} from 'react';

function Compteur() {
    const [compteur, setCompteur] = useState(0)
    const [button, setButton] = useState("")

    const increment = (e) => {
        setCompteur(compteur + 1)
        setButton(e.target.textContent)
        console.log(button)
    }

    const decrement = (e) => {
        setCompteur (compteur - 1)
        setButton(e.target.textContent)
    }

    return (
        <div>
            <button onClick={increment}>Incrémentez</button>
            <button onClick={decrement}>Décrémentez</button>
            <p>Vous, {button} </p>
            <h1>compteur, {compteur}</h1>
        </div>
    )
}

export default Compteur 
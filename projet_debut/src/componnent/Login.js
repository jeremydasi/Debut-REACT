import React, { useState } from "react";

function Connexion() {
    const [login, setLogin] = useState()
    const bonLogin = 'Jérémy'
    localStorage.setItem('login', JSON.stringify(bonLogin))
    function handleSubmit() {
        JSON.parse(localStorage.getItem('login'))
        if (login === bonLogin) {
            localStorage.setItem('connecter', true)
            alert('ok')
        } else {
            alert('non')
        }
    }

    return(
        <div>
            <h1>Connectez-vous</h1>
            <form onSubmit={handleSubmit}>
                <p>Identifiant</p>
                <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Identifiant"></input>
                <button type="submit">Connexion</button>
            </form>
        </div>
    )
}

export default Connexion 
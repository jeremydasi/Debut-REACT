import React, { useState } from 'react';

function Input() {
    const [prenom, setPrenom] = useState("")

    return (
    <div>
        <h1>Hello, {prenom}</h1>
        <input type="text" value={prenom} onChange={e => setPrenom(e.target.value)}/>
    </div>
    )
}

export default Input
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Calorie() {
    const [poids, setPoids] = useState()
    const handleClick = (e) => {
        let Homme = e.target.parentElement.parentElement.children[1].children[0].children[0].checked;
        let Femme = e.target.parentElement.parentElement.children[1].children[1].children[0].checked;
        let Age = Number(e.target.parentElement.parentElement.children[1].children[2].children[0].value);
        let Poids = Number(e.target.parentElement.parentElement.children[1].children[3].children[0].value);
        let Taille = Number(e.target.parentElement.parentElement.children[1].children[4].children[0].value);
        let Activite = (e.target.parentElement.parentElement.children[1].children[5].children[0].value);
        let resultHomme = 66.5+(13.75*Poids)+(5*Taille)-(6.77*Age)*Activite;
        let resultFemme = 655.1+(9.56*Poids)+(1.85*Taille)-(4.67*Age)*Activite;

        if (Homme === true) {
            setPoids(resultHomme)
        } else {
            setPoids(resultFemme)
        }

    }
    return (
        <div
            className="modal show"
            style={{display: 'block', position: 'initial', color: 'black' }}
            >
            
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Calorie</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <label>Homme<input type="checkbox"></input></label>
                    <label>Femme<input type="checkbox"></input></label>
                    <label>Age<input type="number"></input></label>
                    <label>Poids<input type="number"></input></label>
                    <label>Taille<input type="number"></input></label>
                    <label>Activité<input type="text"></input></label>
                </Modal.Body>

                <Modal.Footer>
                    <p>{poids}</p>
                    <button onClick={handleClick}>Calculer</button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}

export default Calorie
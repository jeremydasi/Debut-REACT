import React from "react";
import '../style/Kanban.css';

function Colonne() {
    const AFaire = ["Tache 1", "Tache 2", "Tache 3"];
    const EnCours = ["Tache 1", "Tache 2", "Tache 3"];
    const Terminer = ["Tache 1", "Tache 2", "Tache 3"];

    return(
        <div className="Column">
            <p className="AFaire">A faire {AFaire.map((tache) => <p className="tache1">{tache}</p>)}</p>
            <p className="EnCours">En Cours {EnCours.map((tache) => <p className="tache2">{tache}</p>)}</p>
            <p className="Terminer">Terminer {Terminer.map((tache) => <p className="tache3">{tache}</p>)}</p>
        </div>
    )
}

export default Colonne;
import React from "react";
import '../style/Kanban.css';

function Colonne() {
    const array = [{id:"AFaire", activity:[{id:"tache1", name:"tache1"}, {id:"tache2", name:"tache2"}, {id:"tache3", name:"tache3"}]},
                    {id:"EnCours", activity:[{id:"tache4", name:"tache4"}, {id:"tache5", name:"tache5"}, {id:"tache6", name:"tache6"}]},
                    {id:"Terminer", activity:[{id:"tache7", name:"tache7"}, {id:"tache8", name:"tache8"}, {id:"tache9", name:"tache9"}]}];

    return(
        <div className="Column">
            {/* <p className="AFaire">A faire {AFaire.map((tache) => <p className="tache1">{tache}</p>)}</p>
            <p className="EnCours">En Cours {EnCours.map((tache) => <p className="tache2">{tache}</p>)}</p>
            <p className="Terminer">Terminer {Terminer.map((tache) => <p className="tache3">{tache}</p>)}</p> */}
        </div>
    )
}

export default Colonne;
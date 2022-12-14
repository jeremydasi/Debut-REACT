import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to="/Titre"><button>Titre</button></Link>
            <Link to="/Timer"><button>Timer</button></Link>
            <Link to="/Input"><button>Input</button></Link>
            <Link to="/Fruits"><button>Fruits</button></Link>
            <Link to="/But"><button>But</button></Link>
            <Link to="/Compteur"><button>Compteur</button></Link>
            <Link to="/MyCompenent"><button>Toggle</button></Link>
            <Link to="/TypesExample"><button>Bouton coloré</button></Link>
            <Link to="/StaticExample"><button>Modal</button></Link>
            <Link to="/Poids"><button>Calorie</button></Link>
            <Link to="/Kanban"><button>Kanban</button></Link>
        </nav>
    );
}

export default Header
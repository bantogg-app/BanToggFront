import { Link, useLocation } from 'react-router-dom';

function BottomNav() {
    const location = useLocation();

    return (
        <div className="bottom-nav">
            <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <span className="nav-icon"><img src="/home.png" alt="Accueil" className="icon-img" /></span>
                Accueil
            </Link>
            <Link to="/mes-repas" className={`nav-item ${location.pathname === '/mes-repas' ? 'active' : ''}`}>
                <span className="nav-icon"><img src="/repas.png" alt="repas" className="icon-img" /></span>
                Mes repas
            </Link>
        </div>
    );
}

export default BottomNav;
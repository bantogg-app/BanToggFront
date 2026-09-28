import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

function Accueil() {
    const navigate = useNavigate();

    return (
        <div className="page">
            <div className="accueil-image" />
            <h1>On mange quoi aujourd'hui ?</h1>
            <p className="subtitle">Trouve une idée avec ce que tu as.</p>
            <button className="btn-primary" onClick={() => navigate('/ingredients')}>
                Trouver une idée
            </button>
            <BottomNav />
        </div>
    );
}

export default Accueil;
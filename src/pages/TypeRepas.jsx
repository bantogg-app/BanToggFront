import { useLocation, useNavigate } from 'react-router-dom';

function TypeRepas() {
    const location = useLocation();
    const navigate = useNavigate();
    const proteines = location.state?.proteines || [];

    const choisir = (typeRepas) => {
        navigate('/resultat', { state: { proteines, typeRepas } });
    };

    return (
        <div className="page">
            <button className="back-btn" onClick={() => navigate(-1)}>←</button>
            <h1>Pour quel repas ?</h1>
            <div style={{ marginTop: 24 }}>
                <button className="btn-outline-choice" onClick={() => choisir('dejeuner')}>Déjeuner</button>
                <button className="btn-outline-choice" onClick={() => choisir('diner')}>Dîner</button>
                <button className="btn-outline-choice" onClick={() => choisir('peu_importe')}>Peu importe</button>
            </div>
        </div>
    );
}

export default TypeRepas;
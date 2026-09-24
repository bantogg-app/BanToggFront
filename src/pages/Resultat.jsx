import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { suggererRepas, ajouterHistorique } from '../services/api';
import { getDeviceId } from '../utils/deviceId';

function Resultat() {
    const location = useLocation();
    const navigate = useNavigate();
    const { proteines, typeRepas } = location.state || {};

    const [repas, setRepas] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erreur, setErreur] = useState(null);

    const chargerSuggestion = async () => {
        setLoading(true);
        setErreur(null);
        try {
            const deviceId = getDeviceId();
            const data = await suggererRepas(proteines, typeRepas, deviceId);
            if (data.success) {
                setRepas(data.data);
            } else {
                setErreur(data.message);
                setRepas(null);
            }
        } catch (e) {
            setErreur("Impossible de contacter le serveur, réessaie plus tard.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { chargerSuggestion(); }, []);

    const jeCuisineCa = async () => {
        try {
            const deviceId = getDeviceId();
            await ajouterHistorique(repas.id, deviceId);
            navigate('/mes-repas');
        } catch (e) {
            setErreur("Erreur lors de l'enregistrement, réessaie.");
        }
    };

    if (loading) return <div className="page"><p className="etat-message">Recherche d'une idée...</p></div>;

    if (erreur) return (
        <div className="page">
            <button className="back-btn" onClick={() => navigate('/ingredients')}>←</button>
            <p className="etat-message">{erreur}</p>
            <button className="btn-primary" style={{ marginTop: 20 }} onClick={() => navigate('/ingredients')}>
                Élargir mes critères
            </button>
        </div>
    );

    return (
        <div className="page">
         <button className="back-btn" onClick={() => navigate('/ingredients')}>←</button>
            <div className="resultat-image" />
            <div className="resultat-nom">{repas.nom}</div>
            <div className="resultat-ingredients">{repas.ingredients?.join(' · ')}</div>
            <button className="btn-primary" onClick={jeCuisineCa}>Je cuisine ça</button>
            <button className="btn-secondary" onClick={chargerSuggestion}> <img src="/restart.png" alt="repas" className="icon-img" /><span>Une autre idée</span></button>
            <button className="btn-secondary" onClick={() => navigate('/videos', { state: { repas } })}>
                Voir comment le préparer
            </button>
        </div>
    );
}

export default Resultat;
import { useEffect, useState } from 'react';
import { getHistorique } from '../services/api';
import { getDeviceId } from '../utils/deviceId';
import BottomNav from '../components/BottomNav';

function MesRepas() {
    const [historique, setHistorique] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erreur, setErreur] = useState(null);

    useEffect(() => {
        const charger = async () => {
            try {
                const deviceId = getDeviceId();
                const data = await getHistorique(deviceId);
                setHistorique(data.historique);
            } catch (e) {
                setErreur("Impossible de charger l'historique.");
            } finally {
                setLoading(false);
            }
        };
        charger();
    }, []);

    return (
        <div className="page">
            <h1>Mes repas</h1>
            <p className="subtitle-orange">Cette semaine</p>

            {loading && <p className="etat-message">Chargement...</p>}
            {erreur && <p className="etat-message">{erreur}</p>}
            {!loading && historique.length === 0 && (
                <p className="etat-message">Aucun repas cuisiné pour l'instant.</p>
            )}

            {historique.map((h) => (
                <div key={h.id} className="repas-item">
                    <div className="repas-thumb" />
                    <div>
                        <div className="repas-jour">
                            {new Date(h.date).toLocaleDateString('fr-FR', { weekday: 'long' })}
                        </div>
                        <div className="repas-nom">{h.repas.nom}</div>
                    </div>
                </div>
            ))}
            <BottomNav />
        </div>
    );
}

export default MesRepas;
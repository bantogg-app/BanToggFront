import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Videos() {
    const location = useLocation();
    const navigate = useNavigate();
    const repas = location.state?.repas;

    useEffect(() => {
        if (!repas) {
            navigate('/');
        }
    }, [repas, navigate]);

    if (!repas) {
        return null;
    }

    const videos = repas.lien_video?.length > 0
        ? repas.lien_video
        : [
            { titre: `${repas.nom} facile à la maison`, source: 'Cuisine de Fatou', duree: '8:12' },
            { titre: `La vraie recette du ${repas.nom.toLowerCase()}`, source: 'Saveurs du Sénégal', duree: '12:45' },
            { titre: `${repas.nom} pas à pas`, source: 'Yaay Cuisine', duree: '6:30' },
        ];

    return (
        <div className="page">
            <button className="back-btn" onClick={() => navigate('/resultat', { state: { proteines: repas.proteines, typeRepas: repas.typeRepas } })}>←</button>
            <h1>Tu veux voir comment le préparer ?</h1>
            <p className="subtitle-orange">{repas.nom}</p>
           
            {videos.map((v, i) => (
                <a 
                    key={i}
                    href={v.url || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="video-card"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                >
                    <div className="video-thumb">▶️</div>
                    <div className="video-info">
                        <div className="video-titre">{v.titre}</div>
                        <div className="video-source">{v.source} · {v.duree}</div>
                    </div>
                </a>
            ))}
            <button className="btn-secondary" onClick={() => navigate('/mes-repas')}>Mes repas</button>
        </div>
    );
}

export default Videos;

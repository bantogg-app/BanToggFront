import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CATEGORIES = [
    { value: 'poisson', label: 'Poisson' },
    { value: 'poulet', label: 'Poulet' },
    { value: 'viande', label: 'Viande' },
    { value: 'non_proteine', label: 'Autre' },
];

function Ingredients() {
    const [selection, setSelection] = useState([]);
    const navigate = useNavigate();

    const toggle = (val) => {
        setSelection((prev) =>
            prev.includes(val) ? prev.filter((c) => c !== val) : [...prev, val]
        );
    };

    return (
        <div className="page">
            <button className="back-btn" onClick={() => navigate('/')}>←</button>
            <h1>Qu'est-ce que tu as ?</h1>
            <div className="ingredients-grid">
                {CATEGORIES.map((cat) => (
                    <div
                        key={cat.value}
                        className={`ingredient-card ${selection.includes(cat.value) ? 'selected' : ''}`}
                        onClick={() => toggle(cat.value)}
                    >
                        <div className="ingredient-thumb" />
                        <div className="ingredient-label">{cat.label}</div>
                    </div>
                ))}
            </div>
            <button
                className="btn-primary"
                disabled={selection.length === 0}
                onClick={() => navigate('/type-repas', { state: { proteines: selection } })}
            >
                Continuer
            </button>
        </div>
    );
}

export default Ingredients;
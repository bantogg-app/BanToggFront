import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Ingredients from './pages/Ingredients';
import TypeRepas from './pages/TypeRepas';
import Resultat from './pages/Resultat';
import MesRepas from './pages/MesRepas';
import Videos from './pages/video';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/ingredients" element={<Ingredients />} />
                <Route path="/type-repas" element={<TypeRepas />} />
                <Route path="/resultat" element={<Resultat />} />
                <Route path="/mes-repas" element={<MesRepas />} />
                <Route path="/videos" element={<Videos/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
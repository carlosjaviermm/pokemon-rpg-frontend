import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from "./views/LandingPage/LandingPage.jsx"
import LogInPage from "./views/LogInPage/LogInPage.jsx"
import SignUpPage from "./views/SignUpPage/SignUpPage.jsx"
import StarterSelection from './views/StarterSelection/StarterSelection.jsx'
import MainHub from './views/MainHub/MainHub.jsx'
import Shop from './views/Shop/Shop.jsx'
import LevelPichu from './views/levels/LevelPichu/LevelPichu.jsx'
import LevelJirachi from './views/levels/LevelJirachi/LevelJirachi.jsx'
import LevelCharcadet from './views/levels/LevelCharcadet/LevelCharcadet.jsx'

function App() {

  return (
    <main className="game-container">
      <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LogInPage />} />
              <Route path='/starterselection' element={<StarterSelection />} />
              <Route path='/mainhub' element={<MainHub />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/levelpichu' element={<LevelPichu />} />
              <Route path='/leveljirachi' element={<LevelJirachi />} />
              <Route path='/levelcharcadet' element={<LevelCharcadet />} />
            </Routes>
          </Router>
    </main>
  );
}

export default App;

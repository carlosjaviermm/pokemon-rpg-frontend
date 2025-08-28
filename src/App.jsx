import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from "./views/LandingPage/LandingPage.jsx"
import LogInPage from "./views/LogInPage/LogInPage.jsx"
import SignUpPage from "./views/SignUpPage/SignUpPage.jsx"
import StarterSelection from './views/StarterSelection/StarterSelection.jsx'
import './App.css';

function App() {

  return (
    <main className="game-container">
      <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LogInPage />} />
              <Route path='/starterselection' element={<StarterSelection />} />
            </Routes>
          </Router>
    </main>
  );
}

export default App;

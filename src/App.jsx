import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {closeModal} from './slices/modalSlice.js'
import LandingPage from "./views/LandingPage/LandingPage.jsx"
import LogInPage from "./views/LogInPage/LogInPage.jsx"
import SignUpPage from "./views/SignUpPage/SignUpPage.jsx"
import StarterSelection from './views/StarterSelection/StarterSelection.jsx'
import MainHub from './views/MainHub/MainHub.jsx'
import Shop from './views/Shop/Shop.jsx'
import Level from './views/Level/Level.jsx'
import TokenModal from './components/TokenModal.jsx'

function AppContent() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const modalOpen = useSelector(state => state.modal.open)

  function handleModal () {
    dispatch(closeModal())
    navigate('/')
  }
  return (
    <main className="game-container">
        <TokenModal open={modalOpen} onClose={handleModal} />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LogInPage />} />
              <Route path='/starterselection' element={<StarterSelection />} />
              <Route path='/mainhub' element={<MainHub />} />
              <Route path='/shop' element={<Shop />} />
              <Route path="/level/:id" element={<Level />} />
            </Routes>
    </main>
  );
}

function App () {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App;

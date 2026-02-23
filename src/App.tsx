import { GameContainer } from './components/Game/GameContainer';
import { TrophyProvider } from './context/TrophyContext';
import TrophyNotification from './components/UI/TrophyNotification';
import './App.css'

function App() {
  return (
    <TrophyProvider>
      <div className="app-container">
        <GameContainer />
        <TrophyNotification />
      </div>
    </TrophyProvider>
  )
}

export default App

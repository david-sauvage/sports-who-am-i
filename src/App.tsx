import { GameContainer } from './components/Game/GameContainer';
import { TrophyProvider } from './context/TrophyContext';
import TrophyNotification from './components/UI/TrophyNotification';
import { useSeo } from './hooks/useSeo';
import './App.css'

function App() {
  useSeo();

  return (
    <TrophyProvider>
      <main className="app-container">
        <GameContainer />
        <TrophyNotification />
      </main>
    </TrophyProvider>
  )
}

export default App

import './App.css';
import AboutPage from "./Pages/AboutPage.js"
import Scoreboard from './firebase/Scoreboard.js';
import QuizPage from './Pages/QuizPage.js';
import HomePage from './Pages/HomePage.js';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; 
import BottomSiteSectionContainer from './Credits/BottomSiteSectionContainer';
import NavBar from './NavBar/NavBar';

function App() {

  

  return (
    <div className="App">
      <header className="App-header"> 
       
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/QuizPage" element={<QuizPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/Scoreboard" element={<Scoreboard />} />
       </Routes>
        </BrowserRouter>     
        <BottomSiteSectionContainer/>
      </header>
    </div>
  );
}

export default App;

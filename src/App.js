import './App.css';
import Menu from './components/Menu'
import BackgroundImage from './components/BackgroundImage';
import UIUXPractices from './components/UIUXPractices.js';
import Sobre from './components/Sobre';

function App() {
  return (
    <div className="App">
      <Menu />
      <BackgroundImage />
      <UIUXPractices />
      <Sobre />
    </div>
  );
}


export default App;

import LogoEmpresa from './Assets/logoEmpresa2.jpeg'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={LogoEmpresa} className="App-logo" alt="logo" />
        <h1>Neltec Entulhos</h1>
        <h4>Em construção.</h4>
      </header>
    </div>
  );
}

function App() {
  return (
    <Router basename='neltecentulhos'>
      <Home />
    </Router>
  );
}

export default App;

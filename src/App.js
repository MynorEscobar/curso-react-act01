import logo from './logo.svg';
import './App.css';
import { Libros } from './Libros';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
             
          Actividad 01
          <Libros></Libros>
        
      </header>
    </div>
  );
}

export default App;

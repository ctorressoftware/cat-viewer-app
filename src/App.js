import './App.css';
import CatViewer from './components/CatViewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos los gatos que quieras ver</h1>
        <p>¡Un para&iacute;so gatuno!</p>
        <CatViewer />
      </header>
    </div>
  );
}

export default App;

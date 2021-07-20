import logo from './logo.svg';
import './App.css';
import Model from './components/Model';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "blue", padding: "20px", textAlign: "center", position: "sticky", backgroundColor: "pink" }}>React with R3F</h1>
      <div style={{backgroundColor: "skyblue"}}><Model /></div>
     
    </div>
  );
}

export default App;

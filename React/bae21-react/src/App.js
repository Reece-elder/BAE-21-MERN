import HelloWorld from './components/001-intro/HelloWorld';
import CompWithVars from './components/002-components-vars/CompWithVars';
import './css/App.css';

function App() {
  return (
    <div className="App">
      {/* Components MUST BEGIN WITH CAPITAL LETTER Ctrl + / to auto comment */}
      <HelloWorld/>
      <CompWithVars/>
      
    </div>
  );
}

export default App;

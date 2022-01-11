import HelloWorld from './components/001-intro/HelloWorld';
import CompWithVars from './components/002-components-vars/CompWithVars';
import Parent from './components/003-Parent-child/Parent';
import './css/App.css';

function App() {
  return (
    <div className="App">
      {/* Components MUST BEGIN WITH CAPITAL LETTER Ctrl + / to auto comment */}
      {/* <HelloWorld/>
      <CompWithVars/> */}
      <Parent/>
    </div>
  );
}

export default App;

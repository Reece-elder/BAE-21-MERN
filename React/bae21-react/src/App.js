import HelloWorld from './components/001-intro/HelloWorld';
import CompWithVars from './components/002-components-vars/CompWithVars';
import Page from './components/003-Parent-child/Page';
import Parent from './components/003-Parent-child/Parent';
import Pizza from './components/004-props/Pizza';
import PizzaOrder from './components/004-props/PizzaOrder';
import ParentArray from './components/004-props/array/Parent';
import './css/App.css';

function App() {
  return (
    <div className="App">
      {/* Components MUST BEGIN WITH CAPITAL LETTER Ctrl + / to auto comment */}
      {/* <HelloWorld/>
      <CompWithVars/> */}
      {/* <Parent/> */}
      {/* <Page/> */}
      {/* <PizzaOrder/> */}
      <ParentArray/>
    </div>
  );
}

export default App;

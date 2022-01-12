import HelloWorld from './components/001-intro/HelloWorld';
import CompWithVars from './components/002-components-vars/CompWithVars';
import Page from './components/003-Parent-child/Page';
import Parent from './components/003-Parent-child/Parent';
import Pizza from './components/004-props/Pizza';
import PizzaOrder from './components/004-props/PizzaOrder';
import ParentArray from './components/004-props/array/Parent';
import './css/App.css';
// import Manager from './components/005-state/Manager';
import ControlledInput from './components/006-Forms/ControlledInput';
import UserPassComp from './components/state-exercises/UserPassComp';
import SearchTable from './components/state-exercises/SearchTable';
// import Manager from './components/004-props/contactcard-exercise/Manager';
import Manager from './components/007-lifting-state/Manager';

function App() {
  return (
    <div className="App">
      {/* Components MUST BEGIN WITH CAPITAL LETTER Ctrl + / to auto comment */}
      {/* <HelloWorld/>
      <CompWithVars/> */}
      {/* <Parent/> */}
      {/* <Page/> */}
      {/* <PizzaOrder/> */}
      {/* <ParentArray/> */}
      {/* <Manager/> */}
      {/* <Manager/> */}
      {/* <ControlledInput/> */}
      {/* <UserPassComp/> */}
      {/* <SearchTable/> */}
      <Manager/>
    </div>
  );
}

export default App;

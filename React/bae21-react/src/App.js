import HelloWorld from './components/001-intro/HelloWorld';
import CompWithVars from './components/002-components-vars/CompWithVars';
import Page from './components/003-Parent-child/Page';
import Parent from './components/003-Parent-child/Parent';
import Pizza from './components/004-props/Pizza';
import PizzaOrder from './components/004-props/PizzaOrder';
import ParentArray from './components/004-props/array/Parent';
import './css/App.css';
// import Manager1 from './components/005-state/Manager';
import ControlledInput from './components/006-Forms/ControlledInput';
import UserPassComp from './components/state-exercises/UserPassComp';
import SearchTable from './components/state-exercises/SearchTable';
import Manager2 from './components/004-props/contactcard-exercise/Manager';
import Manager3 from './components/007-lifting-state/Manager';
import Clock from './components/008-useEffect/Clock';

// Importing in what we need for routing
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Nav from './components/009-routing/Nav';
import Footer from './components/009-routing/Footer';
import Home from './components/009-routing/Home';
import About from './components/009-routing/About';
import Shop from './components/009-routing/Shop';
import Manager from './components/005-state/Manager';
import HookParent from './components/008-useEffect/HookParent';

function App() {
  return (
    <div className="App">

      {/* Router is our div that contains everything */}
      <BrowserRouter>
        {/* This component will be rendered on EVERY page */}
        <Nav/>
        <HookParent/>
        {/* <Manager1/> */}

        {/* Everything in switch are the page components that you want to switch between */}
        <Routes>

          {/* what path to take to get to this component */}
          <Route path="/" element={<Home/>}/>

          <Route path="/about" element={<About/>}/>

          <Route path="/shop"element={<Shop/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>

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
      {/* <Manager/> */}
      {/* <Clock/> */}
    </div>
  );
}

export default App;

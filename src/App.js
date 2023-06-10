import logo from './logo.svg';
import './App.css';
import UseEffect from './component/Hooks/useEffect/UseEffect';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import UseContext from './component/Hooks/UseContext/UseContext';
import Map from './component/map/Map';
import Comp1 from './component/routing/C1/Comp1';
import Comp2 from './component/routing/C2/Comp2';
import StateMemory from './component/componentMemory/StateMemory';
import Header from './container/Header/Header';
import Reducer from './component/Hooks/Reducer/Reducer';
import UseReducer from './component/Hooks/useReducer/UseReducer';
import { MyEditor } from './component/Editor/MyEditor';
import Products from './component/reduxComponents/Products/Products';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className='App'>
      <Routes> <Route path="/" element={ <UseEffect/> }/> </Routes>
      <Routes> <Route path="/use-context" element={ <UseContext/> }/> </Routes>
      <Routes> <Route path="/map" element={ <Map/> }/> </Routes>
      <Routes> <Route path="/comp1" element={ <Comp1/> }/> </Routes>
      <Routes> <Route path="/comp2" element={ <Comp2/> }/> </Routes>
      <Routes> <Route path="/state" element={ <StateMemory/> }/> </Routes>
      <Routes> <Route path="/reducer" element={ <Reducer/> }/> </Routes>
      <Routes> <Route path="/use-reducer" element={ <UseReducer/> }/> </Routes>
      <Routes> <Route path="/editor" element={ <MyEditor/> }/> </Routes>
      <Routes> <Route path="/product" element={ <Products/> }/> </Routes>



       </div>
    </BrowserRouter>
  );
}

export default App;

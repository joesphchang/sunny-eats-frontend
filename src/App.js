import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Search from './Search';
import SupriseMe from './SupriseMe';
import Recipes from './Recipes';
import About from './About';

function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='home' element={<><Home></Home><Search></Search></>}></Route>
      <Route path='suprise-me' element={<><SupriseMe></SupriseMe></>}></Route>
      <Route path='recipes' element={<><Recipes></Recipes></>}></Route>
      <Route path='about' element={<><About></About></>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

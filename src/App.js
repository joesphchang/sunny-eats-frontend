import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import SupriseMe from './components/SurpriseMe/SupriseMe';
import Recipes from './components/Recipes/Recipes';
import About from './components/About/About';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
	return (
		<>
    <Nav />
			<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/surprise_me' element={<SupriseMe />} />
					<Route path='/recipes' element={<Recipes />} />
					<Route path='/about' element={<About />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
			</Routes>
		</>
	);
}

export default App;

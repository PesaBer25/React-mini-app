import Todolist from './Todolist.jsx';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import DigitalClock from './DigitalClock.jsx';
import AnalogClock from './AnalogClock.jsx';
import Home from './Home.jsx';
import './Nav.css';

function App(){
	
	return( 
		<BrowserRouter>
		<div className="nav">
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/todolist'>Todolist</Link></li>
				<li><Link to='/aClock'>Analog Clock</Link></li>
				<li><Link to='/dClock'>DigitalClock</Link></li>
			</ul>
			</div>
		<Routes>
			<Route path="/" element={<Home/>}></Route>
			<Route path="/todolist" element={<Todolist/>}></Route>
			<Route path="/aClock" element={<AnalogClock/>}></Route>
			<Route path="/dClock" element={<DigitalClock/>}></Route>
		</Routes>
		</BrowserRouter>
	);
}

export default App;
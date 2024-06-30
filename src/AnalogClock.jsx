import './Analog.css';
import {useState,useEffect} from 'react';

function AnalogClock(){
	const [rot,setRot] = useState([
		{
			transform: `rotate(${new Date().getSeconds()*6}deg)`
		},
		{
			transform: `rotate(${new Date().getMinutes()*6}deg)`
		},
		{
			transform: `rotate(${new Date().getHours()*30 + Math.floor(new Date().getMinutes()/12)}deg)`
		}
	]);


	let id = setInterval(()=>{
		setRot([
		{
			transform: `rotate(${new Date().getSeconds()*6}deg)`
		},
		{
			transform: `rotate(${new Date().getMinutes()*6}deg)`
		},
		{
			transform: `rotate(${new Date().getHours()*30 + Math.floor(new Date().getMinutes()/12)}deg)`
		}
	]);
		return ()=>{clearInterval(id)};
	},1000);

	return(
		<>
			<div className="frame">
				<label>Ray On Spy</label>
				<div className="outer">
					<span style={{"--i":1}}><b>1</b></span>
					<span style={{"--i":2}}><b>2</b></span>
					<span style={{"--i":3}}><b>3</b></span>
					<span style={{"--i":4}}><b>4</b></span>
					<span style={{"--i":5}}><b>5</b></span>
					<span style={{"--i":6}}><b>6</b></span>
					<span style={{"--i":7}}><b>7</b></span>
					<span style={{"--i":8}}><b>8</b></span>
					<span style={{"--i":9}}><b>9</b></span>
					<span style={{"--i":10}}><b>10</b></span>
					<span style={{"--i":11}}><b>11</b></span>
					<span style={{"--i":12}}><b>12</b></span>
					<div style={rot[2]} className="wrapper hr"><hr/></div>
					<div style={rot[1]} className="wrapper min"><hr/></div>
					<div style={rot[0]} className="wrapper sec"><hr/></div>					
					<div className="center"></div>
				</div>
			</div>
		</>
	);
}
export default AnalogClock;
import { useState } from 'react';
import './App.css';
//background changer

function App() {
	const colorsArr = ['red', 'green', 'blue', 'magenta', 'orange', 'white'];
	const [bgColor, setBgColor] = useState(colorsArr[1]);
	return (
		<>
    <h1>Background Color Changer  </h1>
			<div className="background" style={{ background: bgColor }}></div>

			<div className="btnGroup">
				<button
					onClick={() => {
						setBgColor(colorsArr[0]);
					}}>
					red
				</button>
				<button
					onClick={() => {
						setBgColor(colorsArr[1]);
					}}>
					green
				</button>
				<button
					onClick={() => {
						setBgColor(colorsArr[2]);
					}}>
					blue
				</button>
				<button
					onClick={() => {
						setBgColor(colorsArr[3]);
					}}>
					magenta
				</button>
				<button
					onClick={() => {
						setBgColor(colorsArr[4]);
					}}>
					orange
				</button>
				<button
					onClick={() => {
						setBgColor(colorsArr[5]);
					}}>
					white
				</button>
			</div>

			<button
				onClick={() => {
					setBgColor(colorsArr[Math.floor(Math.random() * 5 ) + 1]);
				}}>
				random
			</button>
		</>
	);
}

export default App;

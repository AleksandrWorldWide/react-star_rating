import React, {useState} from 'react'
import './App.css'
import colorData from "./color-data.json";
import ColorList from "./components/ColorsList";

function App() {

   const [colors, setColors] = useState(colorData);
	
	return (
		<ColorList 
			colors={colors} 
			onRemoveColor={id => {
				const newColor = colors.filter(color => color.id !== id)
				setColors(newColor)
			}}
			onRateColor={(id, rating) => {

				const [newColor] = colors.filter(color => color.id === id)
				const newColors = colors.map(color => color.id === id ? {...newColor, rating} : color)
				setColors(newColors)
			}}
		/>
	)
}

export default App

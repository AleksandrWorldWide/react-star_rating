import React from 'react'
import './App.css'
import StarRating from './components/starRating'

function App() {
  return (
   <div className='App'>
		<StarRating
			style={{background: 'lightblue'}}
			onDoubleClick={e => alert('double click')}
		/>
	</div>
  )
}

export default App

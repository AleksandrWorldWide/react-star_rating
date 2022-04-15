import React from "react";
import Color from './Color'

export default function ColorList({colors = []}){
	if (!colors.length) return <div className="">No Colors Listed</div>
	return (
		<>
			{
				colors.map(color => <Color key={color.id} {...color}/>)
			}
		</>
	)
}
import React from 'react'

const Card = ({
	title = 'Mount Raineer',
	elevation = 4000,
	src = 'https://tailwindcss.com/img/card-top.jpg',
}) => (
	<div className="relative">
		<img className="w-full h-full bg-cover" src={src} alt="" />
		<div className="absolute" style={{ top: '1.5rem', left: '1.5rem' }}>
			<p className="text-white text-2xl font-semibold">Categoría</p>
			<h2 className="font-bold text-5xl text-white">{title}</h2>
		</div>
	</div>
)

export default Card

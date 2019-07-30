import React from 'react'

const Card = ({
	title = 'Mount Raineer',
	elevation = 4000,
	src = 'https://tailwindcss.com/img/card-top.jpg',
}) => (
	<div className="relative">
		<img
			className="w-full bg-cover h-64 sm:h-full object-cover"
			src={src}
			alt=""
		/>
		<div className="absolute inset-6">
			<p className="text-white text-2xl font-semibold">Categoría</p>
			<h2 className="font-bold text-2xl sm:text-6xl text-white">
				{title}
			</h2>
		</div>
	</div>
)

export default Card

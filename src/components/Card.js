import React from 'react'

const Card = ({ title, src }) => (
	<div className="relative mb-20 sm:mb-64">
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

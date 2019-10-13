import React from 'react'

const Card = ({ title, src, url }) => (
	<a href={url}>
		<div className="relative mb-20 sm:mb-64">
			<img
				className="w-full bg-cover h-64 sm:h-full object-cover"
				src={src}
				alt="Portafolio"
			/>
			<div className="absolute inset-6">
				<p className="text-white text-2xl font-semibold">Download my</p>
				<h2 className="font-bold text-2xl sm:text-6xl text-white">
					{title}
				</h2>
			</div>
		</div>
	</a>
)

export default Card

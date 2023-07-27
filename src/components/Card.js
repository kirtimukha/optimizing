import React, { useRef } from 'react';

function Card(props) {
	const imgRef = useRef()
	const callback = () => {
		console.log("callback")
	}
	const options= {}
	const observer = new IntersectionObserver(callback, options)
	observer.observe(imgRef.current)
	return (
		<div className="Card text-center">
			<img src={props.image} alt={`test`} ref={imgRef}/>
			<div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
				{props.children}
			</div>
		</div>
	)
}

export default Card

import React, { useEffect, useState } from 'react';
import video from '../assets/banner-video.mp4'
import video_mp4 from '../assets/video-min.mp4'
/*import video_webm from '../assets/video-min.webm'*/
import FontFaceObserver from 'fontfaceobserver'

function BannerVideo() {

	const [isFontLoaded, setIsFontLoaded] = useState(false);

	const font = new FontFaceObserver('BMYEONSUNG');

	useEffect( ()=> {
		font.load().then(function () {
			console.log('BMYEONSUNG is available');
			setIsFontLoaded(true)
		}, function () {
			console.log('BMYEONSUNG is not available');
		});
	},[])


	return (
		<div className="BannerVideo w-full h-screen overflow-hidden relative bg-texture">
			<div className="absolute h-screen w-full left-1/2">
				<video className="absolute translateX--1/2 h-screen max-w-none min-w-screen -z-1 bg-black min-w-full min-h-screen" autoPlay loop muted>
					{/*<source src={video_min_webm} type={`video/webm`}/>*/}
					<source src={video_mp4} type={`video/mp4`}/>
				</video>
			</div>
			<div className="w-full h-full flex justify-center items-center" style={{opacity: isFontLoaded? 1: 0, transition: 'opacity 0.3s ease'}}>
				<div className="text-white text-center">
					<div className="text-6xl leading-none font-semibold">KEEP</div>
					<div className="text-6xl leading-none font-semibold">CALM</div>
					<div className="text-3xl leading-loose">AND</div>
					<div className="text-6xl leading-none font-semibold">RIDE</div>
					<div className="text-5xl leading-tight font-semibold">LONGBOARD</div>
				</div>
			</div>
		</div>
	)
}

export default BannerVideo

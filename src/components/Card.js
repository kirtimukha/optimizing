import React, { useEffect, useRef } from 'react';

function Card(props) {
	const imgRef = useRef()

	//콜백 실행1. 최초 옵저버가 생성되는 순간에 실행됨.
	//2. 이미지가 들어오는 순간, 3. 나가는 순간에 실행됨
	//=> 따라서 콜백에 들어오는 순간에만 로드하도록 함
	//=> callback 안에 entries 를 활용
	//=> mdn 문서 확인
	//let callback = (entries, observer) => {
	//	entries.forEach(entry => {
			// Each entry describes an intersection change for one observed
			// target element:
			//   entry.boundingClientRect
			//   entry.intersectionRatio
			//   entry.intersectionRect
			//   entry.isIntersecting
			//   entry.rootBounds
			//   entry.target
			//   entry.time
	//	});
	//};

	useEffect( () => {
		//entrise : ref (여기서는 imgRef 배열 )
		//observer: observer.observe(imgRef.current) <-- 이것과 동일한 것임
		const callback = (entries, observer) => {
			entries.forEach(entry => {
				if(entry.isIntersecting){
					console.log("intersecting!!")
					//이미지 src를 data-src에 넣고, src를 비운다.
					// 인터세팅인 상태가 될 때 data-src 값을 src 에 넣는다.
					// 이렇게 하니까.. 이미지가 엑박도 보이고.. 좀 느리다...
					entry.target.src = entry.target.dataset.src;
					// 한 번 들어온 이미지를 다시 감시 하지 않는다. = unobserve
					observer.unobserve(entry.target);
				}


				// Each entry describes an intersection change for one observed
				// target element:
				//   entry.boundingClientRect
				//   entry.intersectionRatio
				//   entry.intersectionRect
				//   entry.isIntersecting : 화면에 요소가 들어와 있는지 아닌지를 반환함
				//   entry.rootBounds
				//   entry.target
				//   entry.time
			});
		}
		const options= {}
		const observer = new IntersectionObserver(callback, options)
		observer.observe(imgRef.current)
	}, [])
	return (
		<div className="Card text-center">
			<img data-src={props.image} alt={`test`} ref={imgRef} />
			<div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
				{props.children}
			</div>
		</div>
	)
}

export default Card

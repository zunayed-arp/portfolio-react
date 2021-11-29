import { init } from 'ityped';
import React, { useEffect, useRef } from 'react'
import './Intro.scss'

export default function Intro() {

	const textRef = useRef();

	useEffect(() => {
		console.log(textRef)
		init(textRef.current, {
			showCursor: false,
			backDelay: 1500,
			backSpeed:60,
			strings: ['Developer', 'Designer']
		});
	}, [])



	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imgContainer">
					<img src="assets/man.png" alt="" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi There, I'm </h2>
					<h1>Zunayed Patwary</h1>
					<h3>Junior <span ref={textRef}> </span></h3>
				</div>
				<a href="#portfolio">
					<img src="assets/down.png" alt="" />
				</a>
			</div>

		</div>
	)
}

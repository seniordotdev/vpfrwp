import React, { useEffect } from "react";
import Plyr from "plyr";
import "plyr/dist/plyr.css";

export default function Player({
	posterUrl = "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",
	videoUrl = "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
	mainColor = "#00b3ff",
	width = "500px",
	height = "500px",
}) {
	const player = new Plyr("#player");
	return (
		<div style={{ width, height }}>
			<video
				id="player"
				playsinline
				controls
				data-poster={posterUrl}
				style={{
					"--plyr-color-main": mainColor,
				}}
			>
				<source src={videoUrl} type="video/mp4" />
			</video>
		</div>
	);
}

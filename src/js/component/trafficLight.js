//import react into the bundle
import React, { useState } from "react";

// CSS Styles
const trafficLightBox = {
	backgroundColor: "black",
	width: "10%",
	height: "500px",
	margin: "auto",
	display: "flex",
	flexDirection: "column",
	marginTop: "20px",
	borderRadius: "10px"
};

export function TrafficLight() {
	const updateLightState = () => {
		setRedLight();
	};

	let [redLight, setRedLight] = useState("none");
	return (
		<div style={trafficLightBox}>
			<button
				type="button"
				onClick={() => {
					updateLightState();
				}}
				className="w-75 h-100 mx-auto mt-3 mb-3 rounded-circle bg-danger "></button>
			<button
				type="button"
				className="w-75 h-100 mx-auto mb-3 rounded-circle bg-warning"></button>
			<button
				type="button"
				className="w-75 h-100 mx-auto mb-3 rounded-circle bg-success"></button>
		</div>
	);
}

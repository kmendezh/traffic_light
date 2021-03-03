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
	const updateRedLightState = () => {
		setRedLight("0px 0px 80px red");
		setYellowLight("none");
		setGreenLight("none");
	};

	const updateYellowLightState = () => {
		setYellowLight("0px 0px 80px yellow");
		setRedLight("none");
		setGreenLight("none");
	};

	const updateGreenLightState = () => {
		setGreenLight("0px 0px 80px green");
		setRedLight("none");
		setYellowLight("none");
	};

	let [redLight, setRedLight] = useState("none");
	let [yellowLight, setYellowLight] = useState("none");
	let [greenLight, setGreenLight] = useState("none");
	return (
		<div style={trafficLightBox}>
			<button
				style={{ boxShadow: redLight }}
				type="button"
				onClick={() => {
					updateRedLightState();
				}}
				className="w-75 h-100 mx-auto mt-3 mb-3 rounded-circle bg-danger "></button>
			<button
				style={{ boxShadow: yellowLight }}
				type="button"
				onClick={() => {
					updateYellowLightState();
				}}
				className="w-75 h-100 mx-auto mb-3 rounded-circle bg-warning"></button>
			<button
				style={{ boxShadow: greenLight }}
				type="button"
				onClick={() => {
					updateGreenLightState();
				}}
				className="w-75 h-100 mx-auto mb-3 rounded-circle bg-success"></button>
		</div>
	);
}

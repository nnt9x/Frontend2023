import { Avatar, Slider } from "@mui/material";
import { useState } from "react";

export function ZoomImage(props) {
	const [value, setValue] = useState(100);

	let w = value * 5;
	let h = value * 5;

	return (
		<div style={{ width: "500px" }}>
			<div style={{ width: "500px", height: "500px" }}>
				<Avatar
					alt={"Cat"}
					src={props.src}
					sx={{ width: w, height: h }}
				/>
			</div>
			<Slider
				size="small"
				value={value}
				aria-label="Small"
				valueLabelDisplay="auto"
				onChange={(e, v) => setValue(v)}
			/>
		</div>
	);
}

import React from "react";
import "./Input.scss";

export default function Input(props: {
	name: string;
	type: string;
	placeholder: string;
	data?: any;
	setData?: any;
}) {
	const {name, type, placeholder, data, setData} = props;

	const handleMouseLeave = (e: any) => {
		var cloneData;
		switch (name) {
			case "label":
				cloneData = {...data, label: e.target.value};
				break;
			case "url":
				cloneData = {...data, url: e.target.value};
				break;
			case "password":
				cloneData = {...data, password: e.target.value};
				break;
			default:
				break;
		}
		if (JSON.stringify(data) !== JSON.stringify(cloneData)) setData(cloneData);
	};

	return (
		<div className="input-container">
			<input
				autoComplete="off"
				name={name}
				className="entry"
				type={type}
				placeholder={placeholder}
				onBlur={handleMouseLeave}
				required
			/>
		</div>
	);
}

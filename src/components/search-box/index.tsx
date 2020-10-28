import {changeSearch} from "actions/search";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import useWindowDimensions from "services/getWindowDimensions";
import "./SearchBox.scss";

const classNames = require("classnames");

export default function SearchBox() {
	const {width} = useWindowDimensions();
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();

	const handleShowSearchBox = (e: any) => {
		if (width < 670 && !active) {
			setActive(true);
		}
	};

	const handleHideSearchBox = (e: any) => {
		if (width < 670 && active) {
			if (
				!e.target.classList.contains("input--entry") &&
				!e.target.classList.contains("input")
			)
				setActive(false);
		}
	};

	const handleTextChange = (e: any) => {
		if (e.key === "Enter") {
			const action = changeSearch(e.target.value);
			dispatch(action);
		}
	};

	return (
		<div className={classNames("background", {popup: active})} onClick={handleHideSearchBox}>
			<div className={classNames("input")} onClick={handleShowSearchBox}>
				<i className="input--icon fas fa-search"></i>
				<input
					className="input--entry"
					type="text"
					placeholder="Search by name"
					onKeyPress={handleTextChange}></input>
			</div>
		</div>
	);
}

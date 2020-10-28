import {changeMode, changeTag} from "actions/mode";
import {removePhoto} from "actions/photo";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import rootState from "states/rootState";
import "./Button.scss";

const classNames = require("classnames");

//* props :
//*color: primary, danger, warning, success;
//*size: large, small, medium
export default function Button(props: {
	contents: string;
	color?: string;
	size?: string;
	type?: string;
	data?: any;
	setData?: any;
}) {
	const {contents, color, size, type, data, setData} = props;

	const classColor = `btn--${color}`;
	const classSize = `btn--${size}`;

	const mode = useSelector((state: rootState) => state.modeShow.mode);
	const dispatch = useDispatch();

	//* NOTE
	const handleShowFormAddPhoto = (e: any) => {
		e.preventDefault();
		// e.stopPropagation();
		// e.stopImmediatePropagation();

		if (type === "add") {
			const action = changeMode("ADD");
			dispatch(action);
			return;
		}
		if (type === "cancel") {
			const action = changeMode("MAIN");
			dispatch(action);
			return;
		}

		if (type === "delete") {
			if (mode !== "DELETE") {
				const actionChangeTag = changeTag(data);
				dispatch(actionChangeTag);
				const action = changeMode("DELETE");
				dispatch(action);
				return;
			} else {
				if (data?.password === "") {
					alert("error: enter password");
					return;
				}

				const rmPhoto = removePhoto(data.id, data.password);
				dispatch(rmPhoto);

				const action = changeMode("MAIN");
				dispatch(action);
			}
		}

		//*NOTE: Chuyen handle qua form
		// if (type === "submit") {
		// 	console.log(data);
		// 	return;
		// }
	};

	return (
		<div>
			{(type === "submit" && (
				<button
					className={classNames("btn", classColor, classSize)}
					onSubmit={handleShowFormAddPhoto}>
					{contents}
				</button>
			)) || (
				<button
					className={classNames("btn", classColor, classSize)}
					onClick={handleShowFormAddPhoto}>
					{contents}
				</button>
			)}
		</div>
	);
}

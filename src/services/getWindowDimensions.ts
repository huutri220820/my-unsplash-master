import {useState, useEffect} from "react";
const rem = 16;

// lay chieu rong va cao cua man hinh
function getWindowDimensions() {
	const {innerWidth: width, innerHeight: height} = window;
	return {
		width,
		height,
	};
}

export default function useWindowDimensions() {
	// khi state thay doi ham nay duoc chay lai
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	//effect nay chi chay lan dau duoc mount
	useEffect(() => {
		console.log("%c WindowDimensions did mount", "color: red");
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			console.log("%c WindowDimensions un mount", "color: red");
		};
	}, []);
	// console.log(windowDimensions);
	const columns = Math.floor(windowDimensions.width / (rem * 19 + rem * 0.5 + rem * 1.5));

	return {columns: columns === 0 ? 1 : columns, width: windowDimensions.width};
}

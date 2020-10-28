import Form from "components/form";
import Header from "components/header";
import Photo from "components/photo";
import React from "react";
import {useSelector} from "react-redux";
import useWindowDimensions from "services/getWindowDimensions";
import {storage} from "services/localStore";
import rootState from "states/rootState";
import "./App.scss";

// const Photo = React.lazy(() => import("components/photo"));

function App() {
	////!state and store
	const photoList = useSelector((state: rootState) => state.photos.list);
	storage(photoList, "photos");

	const search = useSelector((state: rootState) => state.search.str);

	const modeShow = useSelector((state: rootState) => state.modeShow.mode);

	// console.table(photoList);
	const {columns} = useWindowDimensions();

	////* dom
	//div contain photos
	var divList: any[] = [];

	//clone photo from photoList global state
	var arrPhoto = photoList.filter((photo) =>
		photo.label.toLowerCase().includes(search.toLowerCase())
	);

	// paging : count on page
	const paging = Math.ceil(arrPhoto.length / columns);

	for (let i = 0; i < columns; i++) {
		let arrTemp = arrPhoto.splice(0, paging);
		const div = (
			<div key={i}>
				{arrTemp.map((photo) => (
					<Photo key={photo.id} photo={photo}></Photo>
				))}
			</div>
		);
		divList = [...divList, div];
	}

	////*return
	return (
		<div className="app">
			<div className="container">
				<Header></Header>
			</div>
			<div className="photo-list">{divList.map((div) => div)}</div>

			{modeShow === "ADD" && (
				<div className="form-container">
					<div className="form-content">
						<Form type="add"></Form>
					</div>
				</div>
			)}
			{modeShow === "DELETE" && (
				<div className="form-container">
					<div className="form-content">
						<Form type="delete"></Form>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;

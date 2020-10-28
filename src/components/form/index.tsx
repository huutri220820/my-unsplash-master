import {addPhoto} from "actions/photo";
import Button from "components/button";
import Input from "components/input";
import PhotoModel from "models/PhotoModel";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import rootState from "states/rootState";
import {changeMode} from "actions/mode";
import "./Form.scss";
import FormModel from "models/FormModel";
const classNames = require("classnames");

export default function Form(props: {type: string}) {
	const {type} = props;
	const photoList = useSelector((state: rootState) => state.photos.list);
	const tag = useSelector((state: rootState) => state.modeShow.tag);
	const dispatch = useDispatch();

	const formInit: FormModel = {
		id: tag ?? 0,
		label: "",
		url: "",
		password: "",
		type: type,
	};

	const [formData, setFormData] = useState<FormModel>(formInit);
	// console.log(formData);

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// console.log(formData);
		const idMax = Math.max(...photoList.map((photo) => photo.id));

		const newPhoto: PhotoModel = {
			id: idMax + 1,
			label: formData.label,
			url: formData.url,
			password: formData.password,
		};
		const addPhotoAction = addPhoto(newPhoto);
		dispatch(addPhotoAction);

		const changeModeAction = changeMode("MAIN");
		dispatch(changeModeAction);
	};

	return (
		<div className={classNames("form", type)}>
			{type === "add" && (
				<form onSubmit={handleSubmit}>
					<div className="form-header">
						<h3>Add a new photo</h3>
					</div>
					<div className="form-body">
						<div className="form-group">
							<label>Label</label>
							<Input
								name="label"
								type="text"
								placeholder="Enter photo name"
								data={formData}
								setData={setFormData}
							/>
						</div>
						<div className="form-group">
							<label>Photo URL</label>
							<Input
								name="url"
								type="url"
								placeholder="Enter photo url"
								data={formData}
								setData={setFormData}
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<Input
								name="password"
								type="password"
								placeholder="Enter password photo"
								data={formData}
								setData={setFormData}
							/>
						</div>
					</div>
					<div className="form-button">
						<Button
							contents="Submit"
							size="medium"
							color="success"
							type="submit"
							data={formData}
						/>
						<Button contents="Cancel" size="medium" type="cancel" />
					</div>
				</form>
			)}
			{type === "delete" && (
				<form>
					<div className="form-header">
						<h3>Are you sure ?</h3>
					</div>
					<div className="form-body">
						<div className="form-group">
							<label>Password</label>
							<Input
								name="password"
								type="password"
								placeholder="Enter password photo"
								data={formData}
								setData={setFormData}
							/>
						</div>
					</div>
					<div className="form-button">
						<Button
							contents="Delete"
							size="medium"
							color="danger"
							type="delete"
							data={formData}
							setData={setFormData}
						/>
						<Button contents="Cancel" size="medium" type="cancel" />
					</div>
				</form>
			)}
		</div>
	);
}

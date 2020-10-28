import React from "react";
import PhotoModel from "models/PhotoModel";
import "./Photo.scss";
import {LazyLoadImage} from "react-lazy-load-image-component";
import Button from "components/button";

export default function Photo(props: {photo: PhotoModel}) {
	const {photo} = props;
	return (
		<div className="photo">
			<div className="photo__vignette"></div>
			<span className="photo__label">{photo.label}</span>
			<LazyLoadImage
				className="photo__content"
				src={photo.url}
				alt={photo.label}
				effect="blur"
			/>
			<div className="photo--btn">
				<Button
					color="danger"
					contents="Delete"
					type="delete"
					size="small"
					data={photo.id}
				/>
			</div>
		</div>
	);
}

import logo from "assets/images/my_unsplash_logo.svg";
import Button from "components/button";
import SearchBox from "components/search-box";
import React from "react";
import "./Header.scss";

export default function Header() {
	return (
		<div className="header">
			<div className="flex">
				<img className="header--logo" src={logo} alt="logo" />
				<div className="header--search">
					<SearchBox></SearchBox>
				</div>
			</div>
			<div className="header--btn">
				<Button contents="Add photo" color="success" size="medium" type="add" />
			</div>
		</div>
	);
}

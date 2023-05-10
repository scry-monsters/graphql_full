import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const RootLayout = () => {
	return (
		<>
			<Header />
			<div className="container">
				<Outlet />
			</div>
		</>
	);
};

export default RootLayout;

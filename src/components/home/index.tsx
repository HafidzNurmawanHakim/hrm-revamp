"use client";

import { useAppContext } from "../context/AppContext";

function index() {
	const { setSidebarOpen, sidebarOpen } = useAppContext();
	return (
		<div>
			<button onClick={() => setSidebarOpen(!sidebarOpen)}>open</button>
		</div>
	);
}

export default index;

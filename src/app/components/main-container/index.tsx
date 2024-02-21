"use client";

import { useState } from "react";
import Sidebar from "../sidebar";
import Topbar from "../topbar";

interface MainContainerProps {
	children: React.ReactNode;
}
export default function MainContainer({ children }: MainContainerProps) {
	const [isOpenSidebar, setIsOpenSidebar] = useState(true);
	const toggleSidebar = () => setIsOpenSidebar(!isOpenSidebar);
	
	return (
		<main className="flex h-screen font-sans">
			{isOpenSidebar ? (
				<div className="w-80">
					<Sidebar />
				</div>
			) : null}
			<div className="w-full">
				<div className="h-full overflow-y-auto overflow-x-hidden">
					<Topbar toggleSidebar={toggleSidebar} />
					{children}
				</div>
			</div>
		</main>
	);
}

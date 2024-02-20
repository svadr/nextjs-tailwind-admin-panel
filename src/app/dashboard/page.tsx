"use client";

import { useState } from "react";
import Sidebar from "../components/sidebar";
import LogsTable from "../components/tables/logs";
import Topbar from "../components/topbar";

export default function Home() {
	const [isOpenSidebar, setIsOpenSidebar] = useState(true);
	const toggleSidebar = () => setIsOpenSidebar(!isOpenSidebar);

	return (
		<div className="flex h-screen font-sans">
			{isOpenSidebar ? (
				<div className="w-80">
					<Sidebar />
				</div>
			) : null}
			<div className="w-full">
				<main className="h-full overflow-y-auto overflow-x-hidden">
					<Topbar toggleSidebar={toggleSidebar} />
					<div className="flex h-full w-full flex-col gap-5 bg-stone-200 p-5">
						<h1 className="w-full self-center rounded-md border border-stone-200 bg-stone-50 p-3 text-center text-2xl shadow-md">
							Bienvenido a tu sistema
						</h1>
						<div className="flex h-full flex-col gap-2 p-3">
							<div className="text-lg">Logs del sistema</div>
							<LogsTable />
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

"use client";
import LogsTable from "./ui/tables/logs";

export default function Home() {
	return (
		<div className="flex h-full w-full flex-col gap-5 bg-stone-200 p-5">
			<h1 className="w-full self-center rounded-md border border-stone-200 bg-stone-50 p-3 text-center text-2xl shadow-md">
				Bienvenido a tu sistema
			</h1>
			<div className="flex h-full flex-col gap-2 p-3">
				<div className="text-lg">Logs del sistema</div>
				<LogsTable />
			</div>
		</div>
	);
}

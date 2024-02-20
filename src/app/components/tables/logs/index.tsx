import React, { useState } from "react";
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	Spinner,
	getKeyValue,
	Button,
	Pagination,
} from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";
import { AnyCnameRecord } from "dns";
import { users } from "./data";

export default function LogsTable() {
	const [page, setPage] = React.useState(1);
	const rowsPerPage = 10;

	const pages = Math.ceil(users.length / rowsPerPage);

	const items = React.useMemo(() => {
		const start = (page - 1) * rowsPerPage;
		const end = start + rowsPerPage;

		return users.slice(start, end);
	}, [page, users]);

	return (
		<Table
			aria-label="Example table with client side pagination"
			bottomContent={
				<div className="flex w-full justify-center">
					<Pagination
						isCompact
						showControls
						showShadow
						color="secondary"
						page={page}
						total={pages}
						onChange={(page) => setPage(page)}
					/>
				</div>
			}
			classNames={{
				wrapper: "min-h-[222px]",
			}}
		>
			<TableHeader>
				<TableColumn key="name">NAME</TableColumn>
				<TableColumn key="role">ROLE</TableColumn>
				<TableColumn key="status">STATUS</TableColumn>
			</TableHeader>
			<TableBody items={items}>
				{(item) => (
					<TableRow key={item.name}>
						{(columnKey) => (
							<TableCell>{getKeyValue(item, columnKey)}</TableCell>
						)}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
}

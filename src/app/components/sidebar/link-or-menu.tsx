import { LinkOrMenuProps } from "@/app/types";
import Link from "next/link";

export default function LinkOrMenu({
	options,
	children,
	toggle,
	link,
}: LinkOrMenuProps) {
	const sharedStyles =
		"flex cursor-pointer justify-between rounded-md p-2 hover:bg-zinc-600 hover:text-zinc-100";
	if (!!toggle && options?.length) {
		return (
			<div className={sharedStyles} onClick={toggle}>
				{children}
			</div>
		);
	}

	return (
		<>
			{!!link ? (
				<Link className={sharedStyles} href={link}>
					{children}
				</Link>
			) : null}
		</>
	);
}

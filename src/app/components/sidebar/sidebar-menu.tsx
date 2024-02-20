"use client";

import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SidebarMenuProps } from "@/app/types";
import SidebarMenuOption from "./sidebar-menu-option";
import LinkOrMenu from "./link-or-menu";

export default function SidebarMenu({
	text,
	icon,
	link,
	options,
}: SidebarMenuProps) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	const displayArrowIcon = () => {
		if (isOpen) {
			return <ChevronDownIcon className="h-4 w-4 self-center" />;
		}

		return <ChevronRightIcon className="h-4 w-4 self-center" />;
	};

	return (
		<div className="flex flex-col gap-2">
			<LinkOrMenu
				options={options?.length ? options : null}
				link={link ? link : null}
				toggle={options?.length ? toggleOpen : undefined}
			>
				<div className="flex gap-3">
					<div className="self-center">{icon}</div>
					<div className="flex gap-4">
						<span>{text}</span>
					</div>
				</div>
				{!!options ? displayArrowIcon() : null}
			</LinkOrMenu>

			{isOpen && !!options ? (
				<div className="flex flex-col gap-3 pl-9">
					{options.map((option) => (
						<SidebarMenuOption {...option} />
					))}
				</div>
			) : null}
		</div>
	);
}

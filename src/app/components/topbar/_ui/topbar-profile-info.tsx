"use client";

import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function TopbarProfileInfo() {
	const [isProfileInfoOpen, setIsProfileInfoOpen] = useState(false);
	const toggleProfileInfo = () => setIsProfileInfoOpen(!isProfileInfoOpen);
	const componentRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (
			componentRef.current &&
			!componentRef.current.contains(event.target as Node)
		) {
			setIsProfileInfoOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div
			className="relative flex cursor-pointer gap-3"
			onClick={toggleProfileInfo}
			ref={componentRef}
		>
			<div className="self-center">
				<Avatar radius="full" size="sm" src="" />
			</div>
			<div className="flex gap-2">
				<div className="self-center text-base">Salvador</div>
				{isProfileInfoOpen ? (
					<ChevronUpIcon className="h-3 w-3 cursor-pointer space-y-2 self-center" />
				) : (
					<ChevronDownIcon className="h-3 w-3 cursor-pointer space-y-2 self-center" />
				)}
			</div>
			{isProfileInfoOpen ? (
				<div className="absolute left-2.5 top-11 w-full rounded-md border border-stone-200 bg-stone-50 px-3 py-3 text-sm text-stone-800 shadow-sm">
					<div className="flex flex-col gap-2">
						<Link
							className="w-full cursor-pointer hover:text-red-400"
							href="/profile"
						>
							Perfil
						</Link>
						<div className="cursor-pointer hover:text-red-400">
							Cerrar sesión
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
}

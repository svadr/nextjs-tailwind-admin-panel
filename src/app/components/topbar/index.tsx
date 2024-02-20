"use client";

import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Avatar } from "@nextui-org/react";
import { signOut } from "next-auth/react";

interface TopbarProps {
	toggleSidebar: () => void;
}

export default function Topbar({ toggleSidebar }: TopbarProps) {
	const [isProfileInfoOpen, setIsProfileInfoOpen] = useState(false);
	const toggleProfileInfo = () => setIsProfileInfoOpen(!isProfileInfoOpen);
	const componentRef = useRef<HTMLDivElement>(null);

	
	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);
	
	const handleClickOutside = (event: MouseEvent) => {
		if (
			componentRef.current &&
			!componentRef.current.contains(event.target as Node)
		) {
			setIsProfileInfoOpen(false);
		}
	};

	const handleSignOut = () => {
		signOut()
	}

	return (
		<div className="sticky top-0 flex justify-between bg-sky-950 px-5 py-3 text-stone-50">
			<Bars3Icon
				className="h-10 w-10 cursor-pointer space-y-2 self-center"
				onClick={toggleSidebar}
			/>

			<div className="flex gap-2">
				{/* <Image
					src="/icono.png"
					width={25}
					height={20}
					alt="Esperanzas logo"
					className="self-center"
				/> */}
				<span className="self-center text-lg">Company's name</span>
			</div>

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
							<div className="cursor-pointer hover:text-red-400" onClick={handleSignOut}>
								Cerrar sesión
							</div>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}

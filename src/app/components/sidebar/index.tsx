import Image from "next/image";
import SidebarMenu from "./sidebar-menu";
import { FolderIcon } from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const home = {
	text: "Home",
	link: "/",
	icon: <HomeIcon className="h-4 w-4" />,
};
const catalogos = {
	text: "Catalogos",
	icon: <FolderIcon className="h-4 w-4" />,
	options: [{ text: "Opcion 1", link: "/catalogos/catalogo1" }],
};

export default function Sidebar() {
	return (
		<aside className="h-full border border-stone-200 bg-stone-50 p-5 text-stone-900">
			<div className="flex flex-col gap-12">
				<div className="flex gap-2">
					<Link className="flex w-full justify-center self-center" href="/">
						{/* <Image
							src="/logo-esperanzas.png"
							width={150}
							height={30}
							alt="Esperanzas logo"
						/> */}
						Logo
					</Link>
				</div>
				<div>
					<ul className="flex flex-col gap-2">
						<li>
							<SidebarMenu {...home} />
						</li>
						<li>
							<SidebarMenu {...catalogos} />
						</li>
					</ul>
				</div>
			</div>
		</aside>
	);
}

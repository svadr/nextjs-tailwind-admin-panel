import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";

export type SidebarMenuOptionsProps = {
	text: string,
	link: string
}

export interface SidebarMenuProps {
	text: string,
	icon: any,
	link?: string,
	options?: SidebarMenuOptionsProps[] 
}


export interface LinkOrMenuProps {
    options?: SidebarMenuOptionsProps[] | null;
	children: ReactNode;
	toggle?: () => void | undefined;
	link?: Url | null;
}
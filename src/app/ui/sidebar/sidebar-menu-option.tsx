import { SidebarMenuOptionsProps } from "@/app/lib";
import Link from "next/link";

export default function SidebarMenuOption({text, link}: SidebarMenuOptionsProps) {
    return (
        <Link className="cursor-pointer hover:text-red-400" href={link}>{text}</Link>
    )
}
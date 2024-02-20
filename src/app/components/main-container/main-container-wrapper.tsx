import React from "react";
import { getServerAuthSession } from "@/server/auth";
import MainContainer from "./index";

interface MainContainerWrapperProps {
	children: React.ReactNode;
}
export default function MainContainerWrapper(children: any) {
	
	return <MainContainer>{children}</MainContainer>;
}

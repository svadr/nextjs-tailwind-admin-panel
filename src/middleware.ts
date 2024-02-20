import type { NextFetchEvent, NextRequest } from "next/server";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
	const requestForNextAuth = {
		headers: {
			cookie: req.headers.get("cookie"),
		},
	};

	// @ts-ignore
	const session = await getSession({ req: requestForNextAuth });

	if (session) {
		return NextResponse.next();
	}

	const url = req.nextUrl.clone();

	if (url.pathname === "/login") {
		return NextResponse.next();
	}

	url.pathname = "/login";
    
	return NextResponse.redirect(url);
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - favicon.ico (favicon file)
		 */
		"/((?!api|admin|_next/static|_next/image|_ipx|assets|favicon.ico|under-development.svg|public).*)",
	],
};

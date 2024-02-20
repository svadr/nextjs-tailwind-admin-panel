import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getServerAuthSession } from "@/server/auth";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	const authSession = await getServerAuthSession();
    if (!authSession?.user) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.redirect(new URL("/", request.url));
}

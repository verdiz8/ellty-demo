// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === "production" && request.nextUrl.pathname === "/thumbnail") {
    return NextResponse.redirect(new URL("/404", request.url));
  }
}

export const config = {
  matcher: "/thumbnail",
};

import { NextRequest, NextResponse } from "next/server";
import { auth } from "./lib/auth";

export default async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  

  const session = await auth.api.getSession({ headers: request.headers });
  const isAuthRoute = pathname.startsWith("/sign-in");

  if (!session && !isAuthRoute) {
    // 1. Clone the current nextUrl object
    const signInUrl = request.nextUrl.clone();
    signInUrl.pathname = "/sign-in";
    
    // 2. Attach the intended destination as a query param (e.g., ?callbackUrl=/dashboard)
    signInUrl.searchParams.set("callbackUrl", pathname);

    return NextResponse.redirect(signInUrl);
  }
  
  if (session && isAuthRoute) {
    // Optional: After successful login, redirect back to callbackUrl if it exists, otherwise go to dashboard
    const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
    return NextResponse.redirect(new URL(callbackUrl, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/sign-in"],
};

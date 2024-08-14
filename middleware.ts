import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (url.pathname.startsWith("/admin") && !url.pathname.startsWith("/admin/login")) {
    const token = req.cookies.get("token")?.value;
    const verifyUrl = new URL("/api/admin/verify", req.url);

    const response = await fetch(verifyUrl.href, {
      headers: {
        Cookie: `token=${token}`,
      },
    });

    if (response.status !== 200) {
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

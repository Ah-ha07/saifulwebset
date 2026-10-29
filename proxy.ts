import { NextResponse, type NextRequest } from "next/server";
import { contentPaths } from "./app/lib/site";

// Preserve campaign queries when the default entry and legacy Chinese URLs move.
export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const legacyChinesePage = contentPaths.some(known => known !== "" && known === path);
  if (path !== "/" && !legacyChinesePage) return NextResponse.next();
  const destination = request.nextUrl.clone();
  destination.pathname = path === "/" ? "/en" : `/zh${path}`;
  return NextResponse.redirect(destination, 308);
}

export const config = {
  matcher: ["/", "/services/:path*", "/faq", "/guides/:path*"],
};

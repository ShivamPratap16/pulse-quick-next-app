import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const path = req.nextUrl.pathname
    const token = req.nextauth.token
    // @ts-ignore
    const userRole = token?.role

    // 🔓 Sanity Studio Protection
    if (path.startsWith("/studio")) {
      if (userRole !== "admin" && userRole !== "super_admin") {
         return NextResponse.redirect(new URL("/unauthorized", req.url))
      }
    }

    // 🔒 Super Admin only routes
    if (path.startsWith("/admin/requests")) {
      if (userRole !== "super_admin") {
        if (userRole === "admin") {
          return NextResponse.redirect(
            new URL("/admin?error=requires_super_admin", req.url)
          )
        }
        return NextResponse.redirect(new URL("/?error=unauthorized", req.url))
      }
    }

    // 🔒 Admin routes
    if (path.startsWith("/admin")) {
      if (userRole !== "admin" && userRole !== "super_admin") {
        return NextResponse.redirect(new URL("/unauthorized", req.url))
      }
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/login",
    },
  }
)

export const config = {
  matcher: ["/admin/:path*", "/studio/:path*"],
}

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";


const isPublicRoute = createRouteMatcher(['/add-book'])

export default clerkMiddleware(async (auth, request) => {

  if (request.nextUrl.pathname=="/add-book") {
    await auth.protect()
  }
})



export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};


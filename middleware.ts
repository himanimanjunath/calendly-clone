import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

//want to protect the private routes and only allow access to the public routes
const isPublicRoute = createRouteMatcher([
    "/",
    "/login(.*)",
    "register(.*)",
    "/book(.*)",

])

//callback function takes auth and request 
export default clerkMiddleware(async (auth, req) => {
    //if the request user is trying to make is not public route
    if (!isPublicRoute(req)){
        //call auth.protect() meaning if its not a public route need u to protect that route
        //simply redirects the user to the login/register route
        await auth.protect()
    }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
// An array of routes that are accessible to the public , These routes don't require authentication
export const publicRoutes = [
    "/",
    "/auth/new-verification"
];

 
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
];

//The prefix for API Authentication routes 
export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
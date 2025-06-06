import { Auth0Client } from "@auth0/nextjs-auth0/server";


export const auth0 = new Auth0Client({
  domain: process.env.AUTH0_ISSUER_BASE_URL!,
  clientId: process.env.AUTH0_CLIENT_ID!,
  clientSecret: process.env.AUTH0_CLIENT_SECRET!,
  appBaseUrl: process.env.AUTH0_BASE_URL!,
  secret: process.env.AUTH0_SECRET!,
});

console.log(
  "WORKING",
  process.env.AUTH0_SECRET,
  process.env.AUTH0_CLIENT_ID!,
  process.env.AUTH0_CLIENT_SECRET!,
  process.env.AUTH0_BASE_URL!,
  process.env.AUTH0_ISSUER_BASE_URL!
);

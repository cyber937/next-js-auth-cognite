import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(req) {
    if (process.env.NODE_ENV === "development") {
      console.log(req.nextauth.token);
    }
  },
  {
    // Pages
    pages: {
      signIn: "/",
    },
  }
);

export const config = { matcher: ["/dashboard"] };

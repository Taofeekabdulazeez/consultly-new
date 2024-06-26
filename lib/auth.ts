// import NextAuth from "next-auth";
// import Google from "next-auth/providers/google";
// import { createUser, getExistingUser } from "./actions";

// // const authConfig = {
// //   providers: [
// //     Google({
// //       clientId: process.env.AUTH_GOOGLE_ID,
// //       clientSecret: process.env.AUTH_GOOGLE_SECRET,
// //     }),
// //   ],

// //   callbacks: {
// //     authorized: ({ auth, request }: any) => {
// //       return !!auth?.user;
// //     },

// //     signIn: async ({ user }: any) => {
// //       try {
// //         const existingUser = await getExistingUser(user.email);

// //         if (!existingUser) await createUser({ email: user.email });
// //         return true;
// //       } catch {
// //         return false;
// //       }
// //     },

// //     session: async ({ session }: any) => {
// //       const user = await getExistingUser(session.user.email);
// //       session.user.id = user.id;
// //     },
// //   },

// //   pages: {
// //     signIn: "/login",
// //     signOut: "/sign-out",
// //   },
// // };

// export const {
//   auth,
//   signIn,
//   signOut,
//   handlers: { GET, POST },
// } = NextAuth({
//   providers: [
//     Google({
//       clientId: process.env.AUTH_GOOGLE_ID,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET,
//     }),
//   ],

//   secret: process.env.NEXTAUTH_SECRET,

//   callbacks: {
//     authorized: ({ auth, request }) => {
//       return !!auth?.user;
//     },

//     signIn: async ({ user }) => {
//       try {
//         const existingUser = await getExistingUser(user.email as string);

//         if (!existingUser) await createUser({ email: user.email });
//         return true;
//       } catch {
//         return false;
//       }
//     },

//     session: async ({ session }) => {
//       const user = await getExistingUser(session.user.email);
//       session.user.id = user.id;
//       return session;
//     },

//     // session: async ({ session }: any) => {
//     //   const user = await getExistingUser(session.user.email);
//     //   session.user.id = user.id;
//     // },
//   },
//   cookies: {
//     pkceCodeVerifier: {
//       name: "next-auth.pkce.code_verifier",
//       options: {
//         httpOnly: true,
//         sameSite: "none",
//         path: "/",
//         secure: process.env.NODE_ENV === "production",
//         maxAge: 900,
//       },
//     },
//   },

//   pages: {
//     signIn: "/login",
//     signOut: "/sign-out",
//   },
// });

import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


//this function return something or some function handler , this is 
//  function is both GET ans well as POST handler.

const handler = NextAuth({
    providers: [

//---------googleproviders --------------
 GoogleProvider({
    clientId: "asd",
    clientSecret:"asdf"
  }),


//----------------github provider -----------------
  GitHubProvider({
    clientId: "asds",
    clientSecret:"asdfs"
  }),



//-------------credential provider using email and password....
    CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "email saar",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "email@gmail.com" },
      password: { label: "Password", type: "password" }
    },

    async authorize(credentials, req) {

        const username = credentials?.username
        const password = credentials?.password


        console.log('username --> ', username)
        console.log('password---> ', password)


      // Add logic here to look up the user from the credentials supplied
      //---here db request to check if this username and password are correct
      const user = 
      { id: "1",
        name: "Aman",
        email: "email@gmail.com" }

      if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    
    }
  })





],
secret:process.env.AUTH_SECRET
})


//export { handler as GET, handler as POST }
export const GET = handler;
export const POST = handler;
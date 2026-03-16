import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authoption: AuthOptions = {

  providers: [

    CredentialsProvider({
      name: "ShopMart",
      credentials: {
        email: { placeholder: '*****@gmail.com' },
        password: { placeholder: 'plez Enter your password', type: 'password' }



      },

      async authorize(data) {
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', {
          method: 'POST',
          body: JSON.stringify({ email: data?.email, password: data?.password }),
          headers: { 'Content-Type': "application/json" }

        });

        const payLoad = await res.json();
        console.log(res);
        
        if (res.ok) {
          return {


            id: payLoad.user.email,
            user: payLoad.user,
            token: payLoad.token


          };


        }
        else {

          throw new Error(payLoad.message)



        }
      }






    })


  ],
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,


  callbacks: {
    async jwt({ token, user }) {


      if (user) {
        token.user = user.user;
        token.token = user.token;
      }

      return token;
    },


    async session({ session, token }) {

      if (token?.user) {
        session.user = token.user;
      }


      if (token?.token) {
        session.token = token.token;
      }

      return session;
    },
  }















}

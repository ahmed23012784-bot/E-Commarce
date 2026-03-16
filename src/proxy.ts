import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const protectsRoutes=['/profile','/cart'];
const AuthsRoutes=['/register','/login'];

export default async function proxy(req:NextRequest)
{

      const token=await getToken({req});

      if(protectsRoutes.includes(req.nextUrl.pathname) ){
       
        if (token) {
            return NextResponse.next();
        }
        else{

          const redirecturl=new URL ('/login',process.env.BASE_URL);
          redirecturl.searchParams.set('url',req.nextUrl.pathname);
          return NextResponse.redirect(redirecturl);


        }



      };



      if(AuthsRoutes.includes(req.nextUrl.pathname) ){
       
        if (token) {
         const redirecturl=new URL ('/',process.env.BASE_URL);
        
           return NextResponse.redirect(redirecturl);


        }
        else{

            return NextResponse.next();


        }



      };
   return NextResponse.next();

}
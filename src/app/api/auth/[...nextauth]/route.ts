import NextAuth from "next-auth";
import {authoption} from '@/auth'
 const handlar=NextAuth(authoption);

 export {handlar as GET, handlar as POST }
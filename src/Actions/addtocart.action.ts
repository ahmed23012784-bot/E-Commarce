"use server"

import { authoption } from "@/auth"; 
import { getServerSession } from "next-auth";
import {shippingaddress} from '@/Interfaces/Cart'

export  async function addtocartaction(id:string) {
    
       const session =await getServerSession(authoption);
       if(session){


                 

            
      const res=await fetch('https://ecommerce.routemisr.com/api/v1/cart',
{
    method:'POST',
    body:JSON.stringify({productId:id}),
    headers:{
            
        token: session ?.token as string ,
        "content-type":"application/json"


    }




}




);

       const data=await res.json();



  return data;



       }else{


        return null
       }
   

}




export  async function checkoutaction(cartId:string,shippingaddress:shippingaddress) {
    
       const session =await getServerSession(authoption);
       if(session){


                 

            
      const res=await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
{
    method:'POST',
    body:JSON.stringify({shippingaddress}),
    headers:{
            
        token: session ?.token as string ,
        "content-type":"application/json"


    }




}




);

       const data=await res.json();



  return data;



       }else{


        return null
       }
   

}




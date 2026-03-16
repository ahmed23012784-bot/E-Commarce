"use client"


import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { Heart, Loader2, ShoppingCart } from 'lucide-react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import toast from 'react-hot-toast';
import {addtocartaction} from "@/Actions/addtocart.action"
import { useRouter } from 'next/navigation';

export default function AddToCart({productId}:{productId:string}) {
   const [isLoading,setisLoading]=useState(false); 
  const router=useRouter();

   async function addtocart(id:string) {

      try{

          setisLoading(true);  

      const data =await addtocartaction(id);
      if(data==null)
      {

      router.push('/login')
      return;

      }




  

         if(data.status=='success')
         {
          
         toast.success(data.message+'');
           dispatchEvent(new CustomEvent("CartUpdate",{detail:data.numOfCartItems}))



        }
        else {
           toast.error(data.message);


        }


      }
     
      catch (err) {
  
}
      finally {
    setisLoading(false);
  }




    
   }



    






  return<>
 <CardFooter className=' gap-2'>
    <Button disabled={isLoading}
    
        onClick={()=>addtocart(productId)} 

    
    
    
    className=' grow font-semibold p-2'
    >
        
        {isLoading?<Loader2 className=' animate-spin'/>:<ShoppingCart/>}
        Add To Cart</Button>
    <Heart/>
  </CardFooter> 



  </>
}
















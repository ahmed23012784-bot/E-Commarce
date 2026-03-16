"use client"

import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { ShoppingCart,ShoppingCartIcon } from 'lucide-react';


export default function CartIcon({serverCartNum}:{serverCartNum:number}){


 const [cartNum,setcartNum]=useState(serverCartNum);
  useEffect(()=>{
   function handler(e:CustomEvent){
     
   setcartNum(e.detail)



   }
  
   addEventListener('CartUpdate',handler as EventListener);







  },[])





  return<>



     <Link href="/cart" className=' relative  inline-flex group '>  
     <ShoppingCartIcon className='text-inherit size-6  '/>
        <span className="absolute -top-3 end-[-7] bg-black text-accent  h-4 px-1    text-sm flex items-center justify-center rounded-xl">
          {cartNum}
</span>
      </Link>
   
  
  </>
}

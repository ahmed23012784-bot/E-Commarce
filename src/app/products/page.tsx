import React from 'react';
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {ProductResponse} from "@/Interfaces/productinterface";
import Link from "next/link";
import { Heart, StarHalf, StarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AddToCart from '@/components/AddToCart/AddToCart';
import {formatCurrency} from "@/Helpers/formatCurrency"

export default async function Products() {


  const responsee = await fetch('https://ecommerce.routemisr.com/api/v1/products');
  const data : ProductResponse = await responsee.json();
  return <>
  
    
  
   <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>

{data.data.map((product)=> <div  key={product.id} className=" p-2" > 
  
  


  <Card className=' overflow-hidden pt-0'>
   <Link href={'/products/' + product.id}>
   
   

    <div className=' -m-1 -mt-6'>

         <Image src={product.imageCover} alt={product.title} width={1000} height={800} className="w-full  relative z-20 object-cover"/>


    </div>


  <CardHeader className=' mt-2'>
     <CardDescription className=' font-bold'>{product.brand.name}</CardDescription>
    <CardTitle className=' line-clamp-1 linee'>{product.title}</CardTitle>
    <CardDescription className=' font-bold'>{product.category.name}</CardDescription>
  </CardHeader>
  <CardContent className=''>

  <div className='flex'>
  <StarIcon className='text-amber-400 fill-amber-400 ' fill='true'/>
  <StarIcon className='text-amber-400 fill-amber-400 ' fill='true'/>
  <StarIcon className='text-amber-400 fill-amber-400 ' fill='true'/>
  <StarIcon className='text-amber-400 fill-amber-400 ' fill='true'/>
  <StarHalf className='text-amber-400 fill-amber-400 ' fill='true'/>


  </div>

  <p  className='text-amber-500 font-semibold'>{product.ratingsAverage}</p>
   <p className='text-lime-900 font-semibold'>{formatCurrency (product.price)}$</p>
  </CardContent>
   
   
   
   
   </Link>

  <AddToCart productId={product.id}/>
</Card> 
  
</div> )}



   </div>






  


  
  </>
  
}




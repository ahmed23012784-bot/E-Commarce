import { Products } from '@/Interfaces/productinterface';
import { Params } from 'next/dist/server/request/params'
import React from 'react'
import {
   Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, StarHalf, StarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Slider from '@/components/Slider/Slider';
import AddToCart from '@/components/AddToCart/AddToCart';
import {formatCurrency} from "@/Helpers/formatCurrency"


export default async function ProductDetails({params}:{params:Params}) {

const {productId} =await params;
const res = await fetch(`${process.env.API_URL}/products/${productId}`);
const {data:product}:{data:Products}=await res.json();




  return <>
    <h1 className=' lineeh  text-center py-7 text-5xl font-bold'>{product.title}</h1>    
    <Card className=' grid grid-cols-1 md:grid-cols-3 bg-gray-100 items-center '>



   <div className=' m-5'>



    <Slider images={product.images}   title={product.title}/>

    
   
    

   </div>
    

    <div className=' col-span-2 space-y-5 p-4  '>

   





        <CardHeader className=' mt-2 '>
     <CardDescription className=' text-gray-700 font-semibold text-xl  '>{product.brand.name}</CardDescription>
    <CardTitle className=' linee  text-xl font-bold '>{product.title}</CardTitle>

   



     <CardAction className='text-gray-900  font-semibold  bg-gray-300 p-4 hover:text-gray-100 hover:bg-gray-500 rounded-lg '>{product.category.name}</CardAction>




    <CardDescription className='text-gray-700 font-semibold '>{product.description}</CardDescription>
  </CardHeader>
  <CardContent className=''>

  <div className=' flex  '>
  <StarIcon className='text-amber-400 fill-amber-400  ' fill='true'/>
  <StarIcon className='text-amber-400 fill-amber-400  ' fill='true'/>
  <StarIcon className='text-amber-400 fill-amber-400 ' fill='true'/>
  <StarIcon className='text-amber-400 fill-amber-400 ' fill='true'/>
  <StarHalf className='text-amber-400 fill-amber-400 ' fill='true'/>

 
  </div>
   <p  className='text-amber-500 font-semibold '>{product.ratingsAverage}</p>
   <p className='text-lime-900 font-semibold '>{formatCurrency(product.price)}$</p>
  
  </CardContent>


  <AddToCart productId={product.id}/>


    </div>

  

















    </Card>
  
  
  
  
  
  
  
  
  
  
  </>
}

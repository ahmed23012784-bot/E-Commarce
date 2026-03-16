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
import {BrandItem} from '@/Interfaces/brandinterface'


export default async function brandDetails({params}:{params:Params}) {

const {brandId} =await params;
const res = await fetch(`${process.env.API_URL}/brands/${brandId}`);
const {data:brand}:{data:BrandItem}=await res.json();




  return <>
    <h1 className=' lineeh  text-center py-7 text-5xl font-bold'>{brand?.name}</h1>    
    <Card className=' grid grid-cols-1 md:grid-cols-3 bg-gray-100 items-center '>



   <div className=' m-5'>



    <Slider
  key={brand?._id}
  images={[brand?.image]}
  title={brand?.name}
/>

    
   
    

   </div>
    

    <div className=' col-span-2 space-y-5 p-4  '>

   





        <CardHeader className=' mt-2 '>
    <CardTitle className=' linee  text-xl font-bold '>{brand?.name}</CardTitle>

   



     <CardAction className='text-gray-900  font-semibold  bg-gray-300 p-4 hover:text-gray-100 hover:bg-gray-500 rounded-lg '>{brand?.name}</CardAction>




    <CardDescription className='text-gray-700 font-semibold '>{brand?.slug}</CardDescription>
  </CardHeader>
  <CardContent className=''>

  <div className=' flex  '>
  <StarIcon className='text-amber-400 fill-amber-400  ' fill='true'/>
  <StarIcon className='text-amber-400 fill-amber-400  ' fill='true'/>
  <StarIcon className='text-amber-400 fill-amber-400 ' fill='true'/>
  <StarIcon className='text-amber-400 fill-amber-400 ' fill='true'/>
  <StarHalf className='text-amber-400 fill-amber-400 ' fill='true'/>

 
  </div>
   <p  className='text-amber-500 font-semibold '>{brand?.slug}</p>
  
  </CardContent>



    </div>

  

















    </Card>
  
  
  
  
  
  
  
  
  
  
  </>
}

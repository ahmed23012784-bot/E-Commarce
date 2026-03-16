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
import {Category} from '@/Interfaces/categories'


export default async function categoriesDetails({params}:{params:Params}) {

const {categoriesId} =await params;
const res = await fetch(`${process.env.API_URL}/categories/${categoriesId}`);
const {data:category}:{data:Category}=await res.json();




  return <>
    <h1 className=' lineeh  text-center py-7 text-5xl font-bold'>{category?.name}</h1>    
    <Card className=' grid grid-cols-1 md:grid-cols-3 bg-gray-100 items-center '>



   <div className=' m-5'>



    <Slider
  key={category?._id}
  images={[category?.image]}
  title={category?.name}
/>

    
   
    

   </div>
    

    <div className=' col-span-2 space-y-5 p-4  '>

   





        <CardHeader className=' mt-2 '>
    <CardTitle className=' linee  text-xl font-bold '>{category?.name}</CardTitle>

   



     <CardAction className='text-gray-900  font-semibold  bg-gray-300 p-4 hover:text-gray-100 hover:bg-gray-500 rounded-lg '>{category?.name}</CardAction>




    <CardDescription className='text-gray-700 font-semibold '>{category?.slug}</CardDescription>
  </CardHeader>
  <CardContent className=''>

  <div className=' flex  '>
  <StarIcon className='text-amber-400 fill-amber-400  ' fill='true'/>
  <StarIcon className='text-amber-400 fill-amber-400  ' fill='true'/>
  <StarIcon className='text-amber-400 fill-amber-400 ' fill='true'/>
  <StarIcon className='text-amber-400 fill-amber-400 ' fill='true'/>
  <StarHalf className='text-amber-400 fill-amber-400 ' fill='true'/>

 
  </div>
   <p  className='text-amber-500 font-semibold '>{category?.slug}</p>
  
  </CardContent>



    </div>

  

















    </Card>
  
  
  
  
  
  
  
  
  
  
  </>
}

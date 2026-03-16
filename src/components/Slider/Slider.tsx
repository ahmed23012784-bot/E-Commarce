'use client'

import Image from "next/image";
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function Slider(  {images,title}:{images:string[],title:string}  ) {
  return <>
   <Carousel opts={{loop:true,}} 
     
       plugins={[
        Autoplay({
          delay: 1400,
        }),
      ]}
     >
     <CarouselContent>

   
      {
         images.map((img,index)=>  <CarouselItem key={index}>
      <Image src={img} alt={title} width={1000} height={800} className=' w-full'/>

    </CarouselItem>)


      }












     </CarouselContent>
            <CarouselNext />

      </Carousel>
  
  </>
    
  


  
}

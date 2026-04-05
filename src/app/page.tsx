import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return<>
  
   <div className=" flex flex-col items-center  justify-between gap-8 my-20">
       <h1 className="text-center text-7xl font-bold lineeh">Welcome to ShopMart </h1>

        <p className="text-center text-xl font-bold linee capitalize  ">Experience effortless shopping from home with Shopmart, where convenience meets quality.</p>
    
    
    
         <div className="flex items-center p-0 md:p-20 justify-center gap-4">

           <Link href={'/products'}>
              
              <Button className=" font-semibold p-2 hover:bg-white hover:text-black border border-black" size='lg'>
            
            
            Shop Now
            
            </Button>
           
           </Link>
         <Link href={'/categories'}>
         
         <Button className=" font-semibold p-2 text-black  border-black  hover:bg-black hover:text-white hover:border-white " size='lg' variant="outline">Browse Categories</Button>

         
         </Link>


         </div>
        
    
    </div>  
  
  
  
  
  
  
  </>
}

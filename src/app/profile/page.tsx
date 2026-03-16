import { authoption } from '@/auth';
import { jwtDecode } from 'jwt-decode';
import { getServerSession } from 'next-auth';
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function page() {
const session = await getServerSession(authoption);

  
const decoded = jwtDecode<{id : string}>(session?.token || "")


 return<>
 <div className='flex flex-col justify-center  items-center'>


   
    <h1 className='text-4xl lineeh font-bold '> Hello, {session?.user.name}</h1> 
  <p className='text-xl linee font-bold  py-5'>  Welcome to ShopMart! You have successfully signed in with {session?.user.email}. Happy shopping 🛒</p>


    
         <div className="flex items-center  justify-center gap-4">

           <Link href={'/products'}>
              
              <Button className=" font-semibold p-2 hover:bg-white hover:text-black border border-black" size='lg'>
            
            
            Shop Now
            
            </Button>
           
           </Link>
         <Link href={'/allorders'}>
         
         <Button className=" font-semibold p-2 text-black  border-black  hover:bg-black hover:text-white hover:border-white " size='lg' variant="outline">MY Orders</Button>

         
         </Link>


         </div>
        




 </div>

 </>
  
}

 

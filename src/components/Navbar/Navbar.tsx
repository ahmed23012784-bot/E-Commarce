
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { LogInIcon, LogOutIcon, ShoppingCart,ArrowRight, ShoppingCartIcon,User2Icon, RegexIcon, HomeIcon } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Logout from "@/components/Logout/Logout"
import { getServerSession } from 'next-auth';
import { authoption } from '@/auth';
import CartIcon from "@/components/CartIcon/CartIcon"
import { CartRes } from '@/Interfaces/Cart';
export default async function Navbar() {

 const session = await getServerSession(authoption);
 


 let data:CartRes|null=null;
 
 if(session){

   const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/cart",
    {
      headers: {
        token: session?.token as string,
      },
    }
  );

  data = await response.json();

 }


  







  return <>
             
<nav className=' bg-gray-100 shadow-2xl py-5  shadow-black  fixed top-0 left-0 w-full  z-50 '>
 <div className="  container  lg:max-w-7xl text-2xl font-semibold mx-auto  flex flex-col md:flex-row items-start ps-4 md:ps-0 md:items-center justify-between ">
  






<h1 className=' flex  items-center gap-2'> 
     <span className='bg-black text-white w-9 h-8 text-center  rounded-lg hover:text-black hover:bg-white  hover:border-2 border-black capitalize font-bold'>S</span>
   <Link href={'/'} className=' lineeh text-gray-500  text-3xl font-bold'>ShopMart</Link>

</h1>








  

<div>
    <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuLink asChild className=' '>
     <Link href="/products"  className='linee font-bold'>Products</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>


      <NavigationMenuItem>
      <NavigationMenuLink asChild className='  '>
     <Link href="/brands" className='linee font-bold'>Brands</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>   




      <NavigationMenuItem>
      <NavigationMenuLink asChild className='  '>
     <Link href="/categories"  className='linee font-bold'>Categories</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>



  </NavigationMenuList>
</NavigationMenu>

</div>







<div >  
    <NavigationMenu>
  <NavigationMenuList>
  <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <User2Icon className=' size-6'/>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>



      <DropdownMenuLabel  className='linee font-semibold'>My Account</DropdownMenuLabel>


     
      {session?<>
      
      
      <Link href={'/profile'}>
     <DropdownMenuItem  className='linee font-semibold'>Profile <HomeIcon className=' text-gray-900'/> </DropdownMenuItem>      
      </Link>
      
      
       <Link href={'/allorders'}>
     <DropdownMenuItem  className='linee font-semibold'>AllOrders   </DropdownMenuItem>      
      </Link>



      
      
        
        <Logout/>
      
        
      
      </>: <>
      
        
           <Link href={'/login'}>
     <DropdownMenuItem  className='linee font-semibold'>LOG_IN <LogInIcon className=' text-gray-900'/> </DropdownMenuItem>      
      </Link>
      
      <Link href={'/register'}>
     <DropdownMenuItem  className='linee font-semibold'>Register <LogOutIcon className=' text-gray-900'/>  </DropdownMenuItem>      
      </Link>

       
      
      </>}







   


    
      
      
        
      
        

    </DropdownMenuGroup>

    
   

  </DropdownMenuContent>
</DropdownMenu>


  







  


    <NavigationMenuItem>
      
  <NavigationMenuLink asChild className='  ' >

 
        {session&& data&&<CartIcon serverCartNum ={data?.numOfCartItems}/>}
        {/* {session&& data&&<CartIcon serverCartNum ={data?.numOfCartItems} cartId={data.data.cartOwner} />} */}
      </NavigationMenuLink>
      
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>







  










</div>
   










  
 
  </div>   
  
       



</nav>
  
  </>
  
}



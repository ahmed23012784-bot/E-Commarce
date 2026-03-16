'use client'
import React from 'react'
import { signOut } from 'next-auth/react';
import {  LogOutIcon } from 'lucide-react';


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Logout() {
  return (
    

  <DropdownMenuItem onClick={()=>signOut({
   callbackUrl:'/'
     })} 
     className='linee font-semibold'>LOG_OUT<LogOutIcon className=' text-gray-900'/>
      </DropdownMenuItem> 

  )
}

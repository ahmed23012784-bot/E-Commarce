  "use client"
  
  import React, { useRef, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {shippingaddress} from '@/Interfaces/Cart'
import {checkoutaction} from '@/Actions/addtocart.action'
import { Loader2 } from 'lucide-react'

                
export default   function CheckOut({cartId}:{cartId:string}) {
  const [isloadingg,setisloadingg]=useState(false);
    const city=useRef<null | HTMLInputElement>(null);
    const details=useRef<null | HTMLInputElement>(null);
    const phone=useRef<null | HTMLInputElement>(null);


    async function checkout(){
      setisloadingg(true);
  const shippingaddress:shippingaddress={

  city:city?.current?.value as string,
  details:details?.current?.value as string,
  phone:phone?.current?.value as string,


  }

    const res =await checkoutaction(cartId,shippingaddress);
    
      if( res.status=='success'){

        location.href=res.session.url;


      }

      setisloadingg(false);
      


    }
   return <>
      
                  
              

   
    <Dialog>
    
        <DialogTrigger asChild>
          <Button className="w-full mt-3 h-11 bg-black text-white font-bold rounded-xl border hover:bg-white hover:text-black">
                 ChekOut
                  </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className='linee font-bold'>Add Shipping Address</DialogTitle>
            <DialogDescription className='font-semibold'>
              please, Add Your Shipping Address
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label className='font-bold' htmlFor="city">City</Label>
              <Input ref={city} id="city" name="city" defaultValue="Cairo" />
            </Field>


            <Field>
              <Label className='font-bold' htmlFor="Details">Details</Label>
              <Input ref={details} id="Details" name="Details" defaultValue="Maddi" />
            </Field>


            <Field>
              <Label className='font-bold' htmlFor="Phone">Phone </Label>
              <Input ref={phone} id="Phone" name="Phone" defaultValue="(+20)**********"/>
            </Field>
            
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={checkout}
            type="submit" disabled={isloadingg}>
              {isloadingg&&<Loader2 className=' animate-spin '/>} 
              Save changes</Button>
          </DialogFooter>
        </DialogContent>
      
    </Dialog>




   </>
 }
                
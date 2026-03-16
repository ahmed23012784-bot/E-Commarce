"use client"

import { Button } from "@/components/ui/button";
import {formatCurrency} from "@/Helpers/formatCurrency"
import { CartRes } from "@/Interfaces/Cart";
import { useState,useEffect } from "react";
import Link from "next/link";
import{clearcartAction, deleteProductAction,updateProductAction} from "@/Actions/cartactions"
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import CheckOut from "@/components/CheckOut/CheckOut"
export default function CartPage({cartData}:{cartData:CartRes |null }) {
const [cart,setcart]=useState<CartRes | null>(cartData||null);
const [loadinggid,setloadinggid]=useState<string|null>(null);


useEffect(() => {
  window.dispatchEvent(
    new CustomEvent("CartUpdate", {
      detail: cart?.numOfCartItems ?? 0,
    })
  );
}, [cart]);

  
  async function deletecartProduct(productId:string) {
    setloadinggid(productId);
    const response: CartRes = await deleteProductAction(productId);

if (response.status === "success") {
  setcart(response);
  dispatchEvent(new CustomEvent("CartUpdate",{detail:response.numOfCartItems}))


}
setloadinggid(null);

  }




  async function updatecartProduct(productId:string,count:number) {
    setloadinggid(productId);
    const response: CartRes = await updateProductAction(productId,count);

if (response.status === "success") {
  setcart(response);
  toast.success('product count update ')
}
setloadinggid(null);

  }




   async function clearcart() {
    setloadinggid('clear');
    const response: CartRes = await clearcartAction();

if (response.message === "success") {
  setcart(null);
    dispatchEvent(new CustomEvent("CartUpdate",{detail:0}))

}
setloadinggid(null);

  }



  return <>
    

 {cart? 
  <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold lineeh tracking-tight">
          Shopping Cart
        </h1>

        <p className="text-muted-foreground font-semibold mt-1">
          {cart.numOfCartItems} items in your cart
        </p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start mt-6">
        




          <div className="lg:col-span-2 space-y-4">

           {cart.data.products.map((item)=>
        
        
        
        
            <div key={item._id} className="flex gap-4 relative rounded-xl border p-4 shadow-sm bg-card">

                  {loadinggid==item.product.id&&<div className=" absolute inset-0 bg-white/80 flex justify-center items-center">

                    <Loader2 className=" animate-spin"/>

                  </div>}
                  




              <img
                src={item.product.imageCover}
                alt={item.product.title}
                className="w-24 h-24 rounded-lg object-cover md:w-28 md:h-28"
              />

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-bold text-base md:text-lg linee line-clamp-2">
                        {item.product.title}
                      </h3>
                    <p className="text-sm font-bold text-muted-foreground mt-1">
                        {item.product.brand.name}.{item.product.category.name}
                   </p>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-bold">
                      {formatCurrency(item.price)}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                    disabled={item.count==1}
                      onClick={()=>updatecartProduct(item.product.id,item.count -1)}
                      aria-label="decrease"
                      className="size-8 rounded-lg border hover:bg-accent"
                    >-</button>

                    <span className="w-6 text-center font-medium">
                      {item.count}
                    </span>

                    <button
                    disabled={item.count==item.product.quantity}
                     onClick={()=>updatecartProduct(item.product.id,item.count +1)}

                      aria-label="increase"
                      className="size-8 rounded-lg border hover:bg-accent"
                    >+</button>
                  </div>

                  <button
                    aria-label="remove"
                    className="text-destructive font-bold hover:underline text-sm cursor-pointer flex gap-1 items-center"
                    onClick={()=>deletecartProduct(item.product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>

        
        
        
        
        
        
        
        
        
        
        
        
        )}



          </div>





          <div className="lg:col-span-1 sticky top-18">
            <div className="rounded-xl border p-5 shadow-sm">
              <h2 className="text-lg font-bold  linee">
                Order Summary
              </h2>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-muted-foreground">
                   Subtotal ({cart.numOfCartItems} items)
                  </span>
                  <span className="font-bold">
                    {formatCurrency(cart.data.totalCartPrice)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-muted-foreground">
                    Shipping
                  </span>
                  <span className="text-emerald-600  font-bold">
                    Free
                  </span>
                </div>
              </div>

              <div className="my-4 border-t" />

              <div className="flex items-center justify-between">
                <span className="text-base font-bold ">
                  Total
                </span>
                <span className="text-base font-bold ">
                  {formatCurrency(cart.data.totalCartPrice)}
                </span>
              </div>

             
                 
                 <Link href={'/products'}>
                  <button className="w-full mt-3 h-11  font-bold rounded-xl border hover:bg-accent">
                Continue Shopping
              </button>
                 
                 </Link>

                 <CheckOut cartId={cart?.cartId} />
            </div>

            <Button
             onClick={()=>clearcart()}
              variant="outline"
              className="text-destructive font-bold hover:text-destructive mt-2 ms-auto flex cursor-pointer"
            >
                       {loadinggid=='clear'&&<Loader2 className=" animate-spin "/>}      Clear Cart
            </Button>
          </div>
        </div>
      </div> : 


      <div className="min-h-[60vh] flex justify-center items-center flex-col">
  <h2 className="text-2xl mb-3 linee">Your Cart Is Empty</h2>

  <Link href="/products">
    <Button>
      Add Ones
    </Button>
  </Link>
</div>

}




  
      
     
      



    </>
  
}
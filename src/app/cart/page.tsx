import React from 'react'
import CartPage from "@/components/CartPage/CartPage"
import {authoption} from "@/auth"
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Cart() {
  const session = await getServerSession(authoption);

  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/cart",
    {
      headers: {
        token: session?.token as string,
      },
    }
  );

  const data = await response.json();



return <>
    {data.numOfCartItems === 0 ? (
      <div className="min-h-[60vh] flex justify-center items-center flex-col">
        <h2 className="text-2xl mb-3 linee">Your Cart Is Empty</h2>

        <Link href="/products">
          <Button>Add Ones</Button>
        </Link>
      </div>
    ) : (
      <CartPage cartData={data} />
    )}
  </>
}

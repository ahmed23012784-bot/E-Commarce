"use client"

import React from 'react'
import { Controller, useForm } from "react-hook-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import  Link  from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { zodResolver } from '@hookform/resolvers/zod'
import {schema} from '@/Helpers/schema'
import * as zod from "zod"
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'


export default function RegisterForm() {
   const [isloading,setisloading]=useState(false);
 const router=useRouter();
  const {handleSubmit, register, formState, reset, control} = useForm({
defaultValues: {
    name: "",
    email: "",
    phone: "",
    password: "",
    rePassword: ""
  },
     resolver:zodResolver(schema)


  })
 

   



   async function submite(values:zod.infer<typeof schema>) {
    const res =await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup',{
    method:'POST',
    body:JSON.stringify(values),
    headers:{
    "Content-type":"application/json"


    }



    })

    const payload=await res.json();
     if(payload.message=='success')
     {

      toast.success("Account created successfully")
       router.push('/login')

     }
    
     else
     {

    toast.error(payload.message);

     }


   }




return <>
    <Card className="  w-full sm:max-w-md bg-gray-100  p-4 sm:p-6 ">

      <CardHeader className=" flex   items-center justify-center">
         <CardDescription className='bg-black text-white w-9 h-9 text-center  rounded-lg hover:text-black hover:bg-white  hover:border-2 border-black capitalize font-bold text-3xl'>
           S
          </CardDescription>

        <CardTitle  className=" text-4xl lineeh text-center">Register Now</CardTitle>

      </CardHeader>

      <CardContent>

        <form onSubmit={handleSubmit(submite)} className="space-y-4">
            <FieldGroup>

            
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="name">Name</FieldLabel>
                    <Input
                      {...field}
                      id="name"
                      type="text"
                      aria-invalid={fieldState.invalid}
                      className={`font-bold ${fieldState.invalid ? "border-red-500 bg-red-50" : ""}`}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

             
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      aria-invalid={fieldState.invalid}
                      className={`font-bold ${fieldState.invalid ? "border-red-500 bg-red-50" : ""}`}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

             
              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="phone">Phone</FieldLabel>
                    <Input
                      {...field}
                      id="phone"
                      type="tel"
                      aria-invalid={fieldState.invalid}
                      className={`font-bold ${fieldState.invalid ? "border-red-500 bg-red-50" : ""}`}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                      {...field}
                      id="password"
                      type="password"
                      aria-invalid={fieldState.invalid}
                      className={`font-bold ${fieldState.invalid ? "border-red-500 bg-red-50" : ""}`}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

              <Controller
                name="rePassword"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="rePassword">Confirm Password</FieldLabel>
                    <Input
                      {...field}
                      id="rePassword"
                      type="password"
                      aria-invalid={fieldState.invalid}
                      className={`font-bold ${fieldState.invalid ? "border-red-500 bg-red-50" : ""}`}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />

            </FieldGroup>

          </form>
      </CardContent>

      <CardFooter>

        
        <div className="flex flex-col sm:flex-row gap-3 w-full">


          <Button onClick={()=>reset()} type="button" variant="outline">
            Reset
          </Button>
          <Button  onClick={handleSubmit(submite)} disabled={isloading} type="submit" >
            {isloading&&<Loader2 className=" animate-spin"/>}
            Submit
          </Button>
             </div>
        
       
      </CardFooter>
       <CardDescription className=" text-center">
          You  have an account? <Link className="text-black font-bold hover:text-gray-700 " href="/login">LOG _IN now to continue</Link>
        </CardDescription>
    </Card>
  </>
}




"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import * as z from "zod"

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
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"


import { signIn } from "next-auth/react";



const formSchema = z.object({
  email: z.email('Enter a valid email user@gmail.com').nonempty('email is required'),
  password: z.string('').nonempty('password is required').regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/, "Password must be at least 8 characters and include uppercase, lowercase, number, and a special character like @ or !"),
})


type FormData = z.infer<typeof formSchema>

export default function LogainForm() {
  const [isloading, setisloading] = useState(false);

  const searchparams = useSearchParams();
  const redirecturl = searchparams.get('url');

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const router = useRouter();

  async function onSubmit(data: FormData) {
    setisloading(true);
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    if (res?.ok) {
      toast.success('Success Logain');
      router.push('/products')
    }
    else {
      toast.error(res?.error!);

    }
    setisloading(false);

  }




  return <>
    <Card className="w-full sm:max-w-md bg-gray-100">

      <CardHeader className=" flex  items-center justify-center">
        <CardDescription className='bg-black text-white w-9 h-9 text-center  rounded-lg hover:text-black hover:bg-white  hover:border-2 border-black capitalize font-bold text-3xl'>
          S
        </CardDescription>

        <CardTitle className=" text-4xl lineeh text-center">ShopMart</CardTitle>

      </CardHeader>

      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-email">
                    Email
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-email"
                    type="email"
                    aria-invalid={fieldState.invalid}
                    className='font-bold'


                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />



            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-password">
                    password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-password"
                    type="password"
                    aria-invalid={fieldState.invalid}
                    className='font-bold'

                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />



          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button disabled={isloading} type="submit" form="form-rhf-demo">
            {isloading && <Loader2 className=" animate-spin" />}
            Submit
          </Button>
        </Field>

      </CardFooter>
      <CardDescription className=" text-center">
        You don’t have an account? <Link className="text-black font-bold hover:text-gray-700 " href="/register">Register now to continue</Link>
      </CardDescription>
    </Card>
  </>

}
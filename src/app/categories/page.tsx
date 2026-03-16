import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {CategoryResponse} from '@/Interfaces/categories'


export default async function CategoriesPage() {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories");
  const data: CategoryResponse = await res.json();

  return <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.data.map((category) => (
        <div key={category._id} className="p-2">
          <Card className="overflow-hidden pt-0 hover:shadow-xl transition">
            <Link href={`/categories/${category._id}`}>
            
              <div className="relative w-full h-110 -m-1 -mt-6">
                {category.image ? (
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="w-full  relative z-20 object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>

              
              <CardHeader className="mt-3 text-center">
                <CardTitle className="font-bold text-lg">{category.name}</CardTitle>
              </CardHeader>

             
              <CardContent className="text-center text-sm text-muted-foreground">
                View Category Products
              </CardContent>
            </Link>
          </Card>
        </div>
      ))}
    </div>
  </>
}
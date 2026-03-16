import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { BrandResponse } from "@/Interfaces/brandinterface";

export default async function BrandsPage() {
  const res = await fetch("https://ecommerce.routemisr.com/api/v1/brands");
  const data: BrandResponse = await res.json();

  return <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {data.data.map((brand) => (
        <div key={brand._id} className="p-2">
          <Card className="overflow-hidden pt-0 hover:shadow-xl transition">
            
            <Link href={`/brands/${brand._id}`}>
              
              <div className="-m-1 w-full h-full -mt-6">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={1000}
                  height={800}
                  className="w-full object-cover"
                />
              </div>

              <CardHeader className="mt-3 text-center">
                <CardTitle className="font-bold text-lg">
                  {brand.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-center text-sm text-muted-foreground">
                View Brand Products
              </CardContent>

            </Link>
          </Card>
        </div>
      ))}
    </div>
  </>
}
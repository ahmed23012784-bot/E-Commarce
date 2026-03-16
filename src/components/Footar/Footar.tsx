import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import products from "@/app/products/page"

export default function Footar() {
  return <>
   <footer className="bg-gray-100 mt-20 border-t">
      <div className="  container mx-auto px-6 lg:max-w-7xl py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        
        <div>
          <div className="flex items-center justify-center  gap-2  ">
            <span className="bg-black text-xl text-white w-9 h-9 flex items-center justify-center rounded-lg font-bold hover:bg-white hover:text-black hover:border transition">
              S
            </span>
            <h1 className="lineeh text-2xl font-bold ">
              ShopMart
            </h1>
          </div>

          <p className="my-4 text-gray-600 text-center leading-7 font-semibold  text-sm">
            Your one-stop destination for the latest technology,
            fashion, and lifestyle products. Quality guaranteed
            with fast shipping and excellent customer service.
          </p>

          <div className="flex items-center justify-center  gap-2 my-3  font-semibold text-gray-600 text-sm hover:text-black transition">
            <Phone size={16} />
            <span>(+20)010093333333</span>
          </div>

          <div className="flex items-center justify-center gap-2 my-3 font-semibold  text-gray-600 text-sm hover:text-black transition">
            <Mail size={16} />
            <span>support@shopmart.com</span>
          </div>

          <div className="flex items-center justify-center gap-2 my-3 font-semibold  text-gray-600 text-sm hover:text-black transition">
            <MapPin size={16} />
            <span >123 Shop Street, October City</span>
          </div>
        </div>

        
        <div>
          <h1 className="font-bold text-lg mb-4 text-center">SHOP</h1>
          <div className="space-y-3 text-sm text-gray-600 text-center">
            {/* <Link href={'/products'}> 
            </Link> */}
            
            <p className="hover:text-black cursor-pointer font-semibold text-center">Electronics</p>

            <p className="hover:text-black cursor-pointer font-semibold text-center">Fashion</p>
            <p className="hover:text-black cursor-pointer font-semibold text-center">Home & Garden</p>
            <p className="hover:text-black cursor-pointer font-semibold text-center">Sports</p>
            <p className="hover:text-black cursor-pointer font-semibold text-center">Deals</p>
          </div>
        </div>

       
        <div>
          <h1 className="font-bold text-lg mb-4 text-center">SUPPORT</h1>
          <div className="space-y-3 text-sm text-gray-600">
            <p className="hover:text-black cursor-pointer font-semibold text-center">Contact Us</p>
            <p className="hover:text-black cursor-pointer font-semibold text-center">FAQs</p>
            <p className="hover:text-black cursor-pointer font-semibold text-center">Shipping</p>
            <p className="hover:text-black cursor-pointer font-semibold text-center">Returns</p>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-lg mb-4 text-center">COMPANY</h1>
          <div className="space-y-3 text-sm text-gray-600 font-semibold text-center">
            <p className="hover:text-black cursor-pointer font-semibold text-center">About Us</p>
            <p className="hover:text-black cursor-pointer font-semibold text-center">Careers</p>
            <p className="hover:text-black cursor-pointer font-semibold text-center">Blog</p>
            <p className="hover:text-black cursor-pointer font-semibold text-center">Privacy Policy</p>
          </div>
        </div>

          <div>
  <h1 className="font-bold text-lg mb-4 text-center">FOLLOW US</h1>

  <div className="flex gap-4 items-center justify-center">

    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-300 shadow hover:bg-blue-600 hover:text-white transition cursor-pointer"
    >
      <Facebook size={16} />
    </a>

    <a
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-300 shadow hover:bg-pink-500 hover:text-white transition cursor-pointer"
    >
      <Instagram size={16} />
    </a>

    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-300 shadow hover:bg-sky-500 hover:text-white transition cursor-pointer"
    >
      <Twitter size={16} />
    </a>

    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-300 shadow hover:bg-blue-700 hover:text-white transition cursor-pointer"
    >
      <Linkedin size={16} />
    </a>

  </div>
</div>
        

      </div>

    
      <div className="border-t py-6 text-center text-xl font-bold hover:text-gray-400 text-gray-600">
        © {new Date().getFullYear()} Developed and owned by <a
  href="https://www.linkedin.com/in/ahmed-nasser-38275a3a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  target="_blank"
  rel="noopener noreferrer"
  className="linee text-2xl font-bold "
>
  Ahmed Nasser Abdelwahab
</a>  All rights reserved. 
      </div>
    </footer>
  
  </>
   
  
}
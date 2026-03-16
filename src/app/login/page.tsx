import LogainForm from '@/components/LogainForm/LogainForm'
import { Suspense } from "react";

export default function Logain() {
  return  <div className=' flex flex-col gap-3 justify-center items-center h-[70vh] md:h-[60vh] mx-6 md:mx-0 '>
   {/* <LogainForm/> */}
   <Suspense fallback={<div>Loading...</div>}>
      <LogainForm />
    </Suspense>
   
  </div>
}

import React from "react";
import { Button } from "@/components/ui/button"
import { IoRocketOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <div className="border w-[90%] mx-auto p-4 py-5 rounded-md mt-6 bg-white h-[200px] place-content-center my-3 ">
      <h1 className="text-2xl text-center font-bold">
        স্বপ্ন ৭১ প্রকাশন এর বইয়ে ৭০% পর্যন্ত মূল্য ছাড়
      </h1>
     <div className="w-full text-center my-4">
     <Button  variant="outline" className="mx-auto border ">শুরু কর <IoRocketOutline/></Button>
     </div>
    </div>
  );
}

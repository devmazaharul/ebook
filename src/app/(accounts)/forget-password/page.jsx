"use client"
import Link from "next/link";
import  { useState } from "react";

export default function page() {

  const reset_obj={
    email:"",
  }


  const [state, setstate] = useState({...reset_obj})



const handleSubmit=(event)=>{
  event.preventDefault()
}



  return (
    <form onSubmit={handleSubmit} className="w-[90%] md:w-[400px] mx-auto p-4  mt-6  rounded-md">
      <h1 className="text-center text-xl text-blue-500 pb-3">রিসেট করুন </h1>
      <div>
        <input
          name="email"
          value={state.email}
          onChange={(e)=>setstate(e.target.value)}
          type="email"
          placeholder="Email"
          className="border rounded-lg"
        />
       
        <div className="text-center">
          <button
            type="button"
            className="bg-blue-500  text-center outline-none hover:bg-blue-600 text-white px-4 py-2 rounded-md w-fit mx-auto my-2"
          >
         রিসেট করুন 
          </button>
        </div>
      </div>
      <div>
        
      </div>
    </form>
  );
}

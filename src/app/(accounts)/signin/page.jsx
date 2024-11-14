"use client"
import { site_url } from "@/site_url";
import axios from "axios";
import Link from "next/link";
import  { useState } from "react";

export default function Signinpage() {

  const loginobj={
    email:"",
    password:""
  }


  const [state, setstate] = useState({...loginobj})

const handleChange=(name,val)=>{
setstate({...state,[name]:val})
}

const handleSubmit=(event)=>{
  event.preventDefault()

  axios.post(site_url+"adminlogin",{
    phone:'01797575933',
    password:"maza123"
  }).then((res)=>{
  console.log(res.data)
  })
}



  return (
    <form onSubmit={handleSubmit} className="w-[90%] md:w-[400px] mx-auto p-4  mt-6  rounded-md">
      <h1 className="text-center text-xl text-blue-500 pb-3">লগ ইন করুন</h1>
      <div>
        <input
          name="email"
          value={state.email}
          onChange={(e)=>handleChange("email",e.target.value)}
          type="email"
          placeholder="Email"
          className="border rounded-lg"
        />
        <input
          type="password"
          value={state.password}
          name="password"
          onChange={(e)=>handleChange("password",e.target.value)}
          placeholder="Password"
          className="border rounded-lg"
        />
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 md:w-[40%] text-center outline-none hover:bg-blue-600 text-white px-4 py-2 rounded-md w-fit mx-auto my-2"
          >
            লগ ইন
          </button>
        </div>
      </div>
      <div>
        <div className="text-center text-gray-600">
          <p>পাসওয়ার্ড ভুলে গেছি? <Link className="text-blue-500" href={'/forget-password'}>Reset</Link></p>
          <p> কোনো একাউন্ট নেই? <Link className="text-blue-500" href={'/signup'}>signup</Link></p>
        </div>
      </div>
    </form>
  );
}

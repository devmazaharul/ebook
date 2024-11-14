"use client"
import { signUpvalidation } from "@/utils/validation";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Signuppage() {

  const signupObj={
    name:"",
    email:"",
    gender:"male",
    address:"",
    password:""
  }

  const [state, setstate] = useState({...signupObj})
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState({})

  const handleChange=(name,val)=>{
    setstate({...state,[name]:val})
    }
    
    const handleSubmit=(event)=>{
      event.preventDefault()
      setloading(true)
     const {message,status}=signUpvalidation(state)
     //api call and wait for server responce 
      if(status==200){
        
       seterror({message:"successfully fillup",status:200})

      }else if(status==201){
        seterror({message:"Empty form field",status:201})
      }
     try {
      
     } catch (error) {
      seterror({message:"connection error",status:500})
     }finally{
      setloading(false)
     }

    }
    





  return (
    <form onSubmit={handleSubmit} className="w-[90%] md:w-[400px]    mx-auto p-4  mt-6  rounded-md">
      <h1 className="text-center text-xl text-blue-500 pb-3">সাইন আপ করুন</h1>
     
      <div>
        <input
          name="name"
          type="text"
          placeholder="Enter name"
          className="border rounded-lg"
          value={state.name}
          onChange={(e)=>handleChange("name",e.target.value)}
        />
        <input
          name="email"
          value={state.email}
          onChange={(e)=>handleChange("email",e.target.value)}
          type="email"
          placeholder="Email"
          className="border rounded-lg"
        />
       <select value={state.gender}           onChange={(e)=>handleChange("gender",e.target.value)} className="border bg-white rounded-lg w-full py-2 px-4 outline-none">
        <option value="male">MALE</option>
        <option value="female">FEMALE</option>
        <option value="others">OTHERS</option>
       </select>
        <input
          name="text"
          type="text"
          placeholder="Address"
          className="border rounded-lg"
          value={state.address}
          onChange={(e)=>handleChange("address",e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={(e)=>handleChange("password",e.target.value)}
          className="border rounded-lg"
        />
         <p className={`${error.status==200?"text-green-500":"text-red-500"}`}>{error && error.message}</p>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500  text-center outline-none  hover:bg-blue-600 text-white px-4 py-3 rounded-md md:w-[40%] w-full mx-auto my-2"
          >
        {loading?<Image className=" mx-auto " src={'/loading.gif'} width={20} height={20} alt="loading icon"/>:"  সাইন আপ"}
          </button>
        </div>
      </div>
      <div>
        <div className="text-center text-gray-600">
         
          <p>ইতিমধ্যে অ্যাকাউন্ট আছে ? <Link className="text-blue-500" href={'/signin'}>Sign In</Link></p>
        </div>
      </div>
    </form>
  );
}

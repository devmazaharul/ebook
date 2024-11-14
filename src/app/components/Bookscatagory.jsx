"use client"
import { site_url } from "@/site_url"
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa";
import "./Book.css"
export default function Bookscatagory() {

    const [books, setbooks] = useState([])
    useEffect(()=>{
        axios.get(site_url+"getbooks").then(({data})=>{
setbooks(data.data.reverse())
        })
    },[])


  return (
    <div className="">
    <div className="grid bg-white p-4 mb-4 rounded-md  gap-2 grid-cols-2 w-[90%] mx-auto md:grid-cols-4 lg:grid-cols-5" >
     {books.map((item,i)=>(
      <div key={Math.random()} className="text-center rounded-md   shadow-lg singleBook capitalize  pb-4 ">
        <div>
          <img src={item.avatar} className="bookimg rounded-t-md" alt="books image" />
        </div>
       <div className="pb-4">
       <p className="text-lg pt-2">{item.title}</p>
        <p className="text-gray-500">{item.author}</p>
        <div className="text-yellow-500 text-center font-bold text-lg ">
         <p className="flex items-center w-fit mx-auto mb-2">
         <FaStar/>
          <FaStar/>
          <FaStar/>
          <FaStar/>
         </p>
          </div>
        <p className="px-2 flex items-start gap-1 w-fit mx-auto bg-green-200"><p>টাকা.</p><b>{item.price}</b> </p>
       </div>
      </div>
     ))}
    </div>
    </div>
  )
}

"use client";
import { site_url } from "@/site_url";
import { bookAddvalidation, signUpvalidation } from "@/utils/validation";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function page() {
  const addBooksobj = {
    title: "",
    author: "",
    desc: "",
    publish_date: "",
    upload_date: new Date().toLocaleDateString(),
    price: "",
    catagory: "",
    pages: "",
    avatar:"",
    discount:''
  };

  const [state, setstate] = useState({ ...addBooksobj });
  const [loading, setloading] = useState(false);
  const [message, setMessage] = useState({});

  const handleChange = (name, val) => {
    setstate({ ...state, [name]: val });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setloading(true);
    try {
      const { message, statusCode } = bookAddvalidation(state);

      if (statusCode == 200) {
        axios.post(site_url+"add-books",state).then((res)=>{
          if(res.status==200){
            setMessage({message:"Added",statusC:200})
          }else{
            setMessage({message:"Not added",statusC:402})
          }
		
		}).catch(()=>{
			setMessage({message:"Connection erro",statusC:500})
		})
      } else if (statusCode == 201) {
        setMessage({ message: message, statusC: 201 });
      } else if (statusCode == 202) {
        setMessage({ message: "Empty boxes", statusC: 201 });
      }
    } catch (error) {
      setMessage({ message: "Connection error", statusC: 500 });
    }finally{
      setloading(false)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[90%] md:w-[400px]    mx-auto p-4  mt-6  rounded-md"
    >
      <h1 className="text-center text-xl text-green-500 pb-3">বই যোগ করুন </h1>
      <div>
        <input
          name="name"
          type="text"
          placeholder="Title"
          className="border rounded-lg capitalize"
          value={state.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        <input
          name="author"
          type="text"
          placeholder="Author Name"
          className="border rounded-lg capitalize"
          value={state.author}
          onChange={(e) => handleChange("author", e.target.value)}
        />
        <input
          name="pulish_date"
          type="text"
          placeholder="publish date (D-M-Y)"
          className="border rounded-lg bg-white w-[100%] timeAnddate"
          value={state.publish_date}
          onChange={(e) => handleChange("publish_date", e.target.value)}
        />
        <input
          name="price"
          type="number"
          placeholder="Enter Price"
          className="border rounded-lg"
          value={state.price}
          onChange={(e) => handleChange("price", e.target.value)}
        />
        <input
          name="discount"
          type="number"
          placeholder="Discount % "
          className="border rounded-lg"
          value={state.discount}
          onChange={(e) => handleChange("discount", e.target.value)}
        />
        <input
          name="avatar"
          type="text"
          placeholder="Avatar link "
          className="border rounded-lg"
          value={state.avatar}
          onChange={(e) => handleChange("avatar", e.target.value)}
        />

        <input
          name="pages"
          type="number"
          placeholder="Enter pages"
          className="border rounded-lg"
          value={state.pages}
          onChange={(e) => handleChange("pages", e.target.value)}
        />

        <select
          value={state.catagory}
          onChange={(e) => handleChange("catagory", e.target.value)}
          className="border bg-white rounded-lg w-full py-2 px-4 outline-none capitalize"
        >
          <option value="islamic">Islamic</option>
          <option value="historical">Historical</option>
          <option value="programming">Programming</option>
          <option value="social">social</option>
          <option value="romantic">romantic</option>
          <option value="story">story</option>
        </select>
        <textarea
          className="border rounded-lg w-full my-1 p-2 outline-none "
          value={state.desc}
          placeholder="Enter somethings this book"
          onChange={(e) => handleChange("desc", e.target.value)}
        ></textarea>
        <p>
          {message && message.statusC == 200 ? (
            <p className="text-green-500">{message.message}</p>
          ) : (
            <p className="text-red-500">{message.message}</p>
          )}
        </p>
        <div className="text-center">
          <button
            type="submit"
            className="bg-green-500  text-center outline-none  hover:bg-green-600 text-white px-4 py-3 rounded-md md:w-[40%] w-full mx-auto my-2"
          >
            {loading ? (
              <Image
                className=" mx-auto "
                src={"/loading.gif"}
                width={20}
                height={20}
                alt="loading icon"
              />
            ) : (
              "  যোগ করুন"
            )}
          </button>
        </div>
      </div>
      <div></div>
    </form>
  );
}

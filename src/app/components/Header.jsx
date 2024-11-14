'use client'
import Image from "next/image"
import Link from "next/link"
import { MdOutlineStorefront } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { IoAddCircleOutline } from "react-icons/io5";
import {SignedIn, SignInButton,SignOutButton,SignedOut, UserButton } from "@clerk/nextjs";


export default function Header() {

  const pathName=usePathname()


  return (
    <div>
        <div className="grid grid-cols-6 md:col-span-5 border-b items-center justify-around gap-2 px-2 py-3 bg-white">
            <Link href="/" className="col-span-1 gap-3 mx-auto"><Image src={'/rokomari_logo.webp'} width={100} height={100} alt="Site_logo"/></Link>
         
            <div className="col-span-3">
                <input type="text" placeholder="Search by superstore" className="w-full border px-2 py-2  rounded-lg outline-none" />
            </div>

           <div className="flex gap-3 mx-auto col-span-1 items-center">
           <Link href={'/signin'} className={`${pathName=="/signin"?"text-green-500":""} md:flex  mx-auto items-center gap-2 `}>
                <FaUser />
                <div className="hidden md:block" href={'#'}>Hellow, Sign In</div>

            </Link>
       <Link href={'/add-book'} className={`${pathName=="/add-book"?"text-green-500":""}  text-2xl   mx-auto items-center gap-2 `}>
                <IoAddCircleOutline  />
            </Link>
           </div>
            

            <div className="text-2xl col-span-1 ">
          <Link className="text-center" href={'#'}>
        
<SignedOut>
  <Link href="https://joint-platypus-50.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2F">  <MdOutlineStorefront className="text-center"/></Link>
</SignedOut>

<SignedIn>
  <UserButton/>
</SignedIn>
          </Link>
            </div>

        </div>
      
    </div>
  )
}

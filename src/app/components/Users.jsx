'use client'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { site_url } from "@/site_url"
import axios from "axios"
import { useEffect, useState } from "react"
  
  
  
  export default function Users() {

    const [users, setusers] = useState([])
    const [error, seterror] = useState('')

    useEffect(()=>{
        console.log('slslslslls')
        axios.get(site_url+'getusers').then((res)=>{
            console.log(res)
            if(res.status==200){
                setusers(res.data.data)
            }else{
                seterror("Somethings went wrong")
            }
        })
    },[])


    return (
      <div className="w-[90%] mx-auto shadow-md border">
        <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader className="bg-gray-700 text-white">
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>gender</TableHead>
            <TableHead className="text-right">password</TableHead>
            <TableHead className="text-right">ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.reverse().map((user) => (
            <TableRow key={Math.random()}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell className="font-medium">{user.email}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>{user.password}</TableCell>
              <TableCell className="text-right">{user._id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      </div>
    )
  }
  
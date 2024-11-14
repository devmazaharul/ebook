import React from 'react'
import Hero from '../components/Hero';
import Bookscatagory from '../components/Bookscatagory';
import Users from '../components/Users';
import Feturedcatagory from '../components/Feturedcatagory';

export default function page() {
  return (
    <div className='p-2 w-[85%] mx-auto'>
      <Hero/>
      <Bookscatagory/>
    <Feturedcatagory/>
    </div>
  )
}

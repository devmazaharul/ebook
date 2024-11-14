import Image from 'next/image'
import React from 'react'

export default function Feturedcatagory() {
  return (
    <div className='p-3 my-3 text-center'>
      <p className='text-3xl py-4 my-3 text-center '>Featured Categories</p>
      <div className='grid grid-cols-5 gap-6 items-center'>
        <div>
            <Image className="mx-auto"  src={'https://www.rokomari.com/static/200/images/icons/home-popular-category/collage.png'} width={150} height={120} alt='fimg'/>
        <p className='py-4'>HSC</p>
        </div>
        <div>
            <Image src={'https://www.rokomari.com/static/200/images/icons/home-popular-category/admission.png'} width={150} height={120} alt='fimg'/>
        <p className='py-4'>SSC</p>
        </div>
        <div>
            <Image src={'https://www.rokomari.com/static/200/images/icons/home-popular-category/school.png'} width={150} height={120} alt='fimg'/>
        <p className='py-4'>JSC</p>
        </div>
        <div>
            <Image src={'https://www.rokomari.com/static/200/images/icons/home-popular-category/madrasha.png'} width={150} height={120} alt='fimg'/>
        <p className='py-4'>PHC</p>
        </div>
       
      </div>
    </div>
  )
}

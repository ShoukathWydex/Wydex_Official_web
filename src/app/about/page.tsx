"use client";
import React from 'react'
import Top from './AboutElements/Top'  
import About from './AboutElements/About'
import Decision from './AboutElements/Decision'
import WhyChooseWydexMedia from './AboutElements/WhyChoice'
import BottoSec from './AboutElements/BottoSec'

function page() {


  return (
    <div className='mt-16 md:mt-20  font-sans text-gray-800 overflow-x-hidden'>
      <Top/>
      <About/>
      <Decision/>
      <WhyChooseWydexMedia/>
      <BottoSec/>
      
    </div>
  )
}

export default page
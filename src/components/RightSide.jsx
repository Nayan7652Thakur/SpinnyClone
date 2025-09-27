import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import EmiCalculatorModal from './EmiCalculatorModal';

const RightSide = () => {
  const [openEmi, setOpenEmi] = useState(false);
  return (
    <div>
      <div className='flex flex-col gap-2 border border-gray-200'>
        <h2 className='xl:text-xl font-bold p-2'>
          2021 Mahindra Thar LX 4 STR Hard Top Diesel MT 4WD
        </h2>
        <p className='text-lg pl-2'>13K km · Diesel · Manual</p>
        <span className='flex items-center font-extralight'>
          📍 Spinny Car Hub, Trillium Avenue, Gurgaon
        </span>
        <span className='pl-2'>Latest cars, 3 year warranty</span>

        {/* 🔥 Infinite marquee */}
        <div className="relative w-full overflow-hidden border-0 border-gray-600 bg-[#E5F7F3] h-10 flex items-center">
          <div className="flex whitespace-nowrap animate-marquee text-xs text-[#4a8871]">
            <span className="mx-1">New prices, lowest ever</span>
            <span className="mx-1">GST savings & Navratri offers included</span>
            <span className="mx-1">Special festive discount</span>
          </div>

        </div>

        <span className='text-sm pl-2'>Fixed road price</span>
        <p className='flex items-center pl-2'>
          <h1 className='font-bold text-2xl inline-flex'>$13.26 Lakh</h1>
          <span className='pl-1'> +1% TCS</span>
        </p>
        <span className='text-xs text-gray-500 pl-2'>includes RC transfer, insurance & more</span>

        <div className='border border-gray-500 mx-2'></div>

        <div className="mt-4 flex justify-between pl-2">
          <div className=''>
            <h2 className='text-[#00B088]'>$24,132/m</h2>
            <span>valid till <span className='text-[#e36000]'>28th sept</span></span>
          </div>
          <button onClick={() => setOpenEmi(true)} className="mt-2 px-2 h-8 bg-[#561381] hover:bg-[#2f2137] text-[#FFFFFF] rounded-lg text-sm">
            Calculate your EMI
          </button>
        </div>
        {/* EMI Modal */}
        <EmiCalculatorModal isOpen={openEmi} onClose={() => setOpenEmi(false)} />
        <span className='text-xs bg-[#E5F7F3] text-[#00B088] py-2 text-center'>
          save $0 in interest · Special rate starts at 10.5%
        </span>
        <p className='bg-[#f6f6f6] text-center  py-2'>
          This inventory is no longer available with us. View similar cars.
        </p>
        <button className="mt-2 px-4 py-2 border rounded-xl bg-[#561381] hover:bg-[#2f2137] text-[#FFFFFF]">
          View Similar Cars
        </button>
      </div>

      <div className='flex gap-7 mt-11 text-center'>
        <span>Share with a friend: </span>
        <span><FaInstagram size={23} /></span>
        <span><FaFacebook size={23} /></span>
        <span><CiMail size={23} /></span>
      </div>
    </div>
  )
}

export default RightSide

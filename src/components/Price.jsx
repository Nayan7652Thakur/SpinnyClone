import React, { useState } from 'react'
import EmiCalculatorModal from './EmiCalculatorModal';

const Price = () => {
    const [openEmi, setOpenEmi] = useState(false);

  return (
    <div className='md:hidden mt-11 p-4 bg-white rounded-lg shadow-md  mx-auto'>
      {/* Car Title */}
      <h2 className='text-sm font-medium text-gray-800 mb-2'>
        2021 Mahindra Thar LX 4 STR Hard Top Diesel MT 4WD
      </h2>

      {/* Price */}
      <p className='text-xl font-semibold text-green-600 mb-4'>$13 Lakh + 1% TCS</p>

      {/* Buttons */}
      <div className='flex gap-3 mb-4'>
        <button className='flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'>
          Buy Car
        </button>
        <button
          className='flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition'
          onClick={() => setOpenEmi(true)} 
        >
          Calculate EML
        </button>
      </div>
      <EmiCalculatorModal isOpen={openEmi} onClose={() => setOpenEmi(false)} />
    </div>
  )
}

export default Price

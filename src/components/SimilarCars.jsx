import React from 'react'

const SimilarCars = () => {
    return (
        <div className="mt-14 md:mt-32 flex flex-col items-center">
            {/* Heading with gradient borders */}
            <div className="flex items-center w-full max-w-3xl">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-black/70 to-transparent"></div>
                <p className="px-4 text-lg font-semibold text-gray-800">Similar Cars</p>
                <div className="h-[2px] flex-1 bg-gradient-to-l from-black/70 to-transparent"></div>
            </div>

            {/* Card Example */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6'>
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className="max-w-sm mt-9 md:mt-20 bg-white border border-gray-200 rounded-lg shadow-sm transform transition duration-300 hover:scale-105"
                    >
                        <a href="#">
                            <img
                                className="rounded-t-lg w-full"
                                src="https://mda.spinny.com/sp-file-system/public/2025-09-24/601b573897704ffdabf27481adc6dbb1/raw/file.JPG?q=85&w=360"
                                alt=""
                            />
                        </a>
                        <div className="p-2">
                            <p className="text-gray-700 text-sm truncate">
                                2021 Mahindra Thar 
                            </p>
                            <div className='flex gap-2 text-xs'>
                                <span>38km</span>
                                <span>*Diesel</span>
                                <span>*Automatic</span>
                            </div>
                        <p className='text-xl'>$23.19Lakh</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SimilarCars

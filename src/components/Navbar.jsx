import React, { useState, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const searchText = ["price", "year", "fuel type", "model"];
  const city = ["Bangalore", "Chennai"];
  const buyCar = ["Honda", "Hyundai", "Tata"];
  const sellCar = ["Benz", "BMW", "Audi"];
  const more = ["One", "Two", "Three"];
  const account = ["Profile", "Settings", "Logout"];

  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [animate, setAnimate] = useState(false);

  // Dropdown state
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // hamburger state

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => {
        setIndex(nextIndex);
        setNextIndex((nextIndex + 1) % searchText.length);
        setAnimate(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [nextIndex]);

  const toggleDropdown = (name) => {
    setOpenDropdown(prev => prev === name ? null : name);
  }

  return (
    <div className='flex items-center justify-between relative px-1 md:px-4 py-2 border-b'>
      {/* Left nav */}
      <div className='flex items-center gap-1 md:gap-3'>
        <img src="./nav.png" alt="" className='w-16 md:w-36' />
        <div className='relative'>
          <button
            onClick={() => toggleDropdown("city")}
            className='hidden md:block border border-gray-500 rounded-full px-3 py-1 text-sm'
          >
             City ↓
          </button>
          {openDropdown === "city" && (
            <div className='absolute top-full left-0 bg-white border border-gray-300 mt-1 rounded shadow-md z-50'>
              {city.map((c, i) => (
                <div key={i} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>{c}</div>
              ))}
            </div>
          )}
        </div>

        <div className='flex relative'>
  <input
    type="text"
    className='border border-gray-500 rounded-full p-2 md:pl-12 w-44 md:w-64'
  />
  {/* Animated text */}
  <div className='absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1 overflow-hidden'>
    <span className='text-xs md:text-sm'>Search by</span>
    <div className='relative w-20 md:w-24 h-5 md:h-6'>
      <span className={`absolute top-[2px] left-0 w-full transition-all duration-500 text-xs md:text-sm ${animate ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        {searchText[index]}
      </span>
      <span className={`absolute top-full left-0 w-full transition-all duration-500 text-xs md:text-sm ${animate ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        {searchText[nextIndex]}
      </span>
    </div>
  </div>
  <CiSearch className='absolute right-2 top-1/2 -translate-y-1/2 text-2xl' />
</div>

      </div>

      {/* Right nav - desktop */}
      <div className='hidden md:flex gap-4 items-center'>
        <button onClick={() => toggleDropdown("sell")} className='text-xs'>Sell car</button>
        <button onClick={() => toggleDropdown("more")} className='text-xs'>More</button>
        <button onClick={() => toggleDropdown("account")} className='text-xs'>Account</button>
        <div>
          <span className='text-xs'>Call us at</span>
          <p className='text-xs'>000-000-0000</p>
        </div>
      </div>

      {/* Mobile hamburger */}
      <div className='md:hidden'>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {menuOpen && (
          <div className='absolute top-full right-0 w-48 bg-white border border-gray-200 shadow-md rounded mt-2 z-50'>
            <div className='flex flex-col'>
              <button onClick={() => toggleDropdown("buy")} className="px-4 py-2 text-left hover:bg-gray-100">Buy car</button>
              <button onClick={() => toggleDropdown("sell")} className="px-4 py-2 text-left hover:bg-gray-100">Sell car</button>
              <button onClick={() => toggleDropdown("more")} className="px-4 py-2 text-left hover:bg-gray-100">More</button>
              <button onClick={() => toggleDropdown("account")} className="px-4 py-2 text-left hover:bg-gray-100">Account</button>
              <button className="px-4 py-2 text-left hover:bg-gray-100">Shortlisted</button>
              <div className='px-4 py-2 border-t'>
                <span className='text-xs'>Call us at</span>
                <p className='text-sm'>000-000-0000</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;

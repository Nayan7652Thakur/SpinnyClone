import React from 'react'
import Navbar from './components/Navbar'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import Hero from './components/Hero'
import CarOverview from './components/CarOverview'
import SimilarCars from './components/SimilarCars'
import Price from './components/Price'
import Questions from './components/Questions'

const App = () => {
  return (
    <div className='py-4 px-1 lg:px-32'>
      <Navbar />
      <div className='flex gap-1 md:gap-4 mt-4 items-start'>
        <div className='flex-1 p-1'>
          <Hero />
          <Price />
          <CarOverview />
        </div>

        <div className='hidden lg:block w-1/3 sticky top-4 self-start rounded-lg mt-11'>
          <RightSide />
        </div>
      </div>
      <SimilarCars />
      <Questions />
    </div>
  )
}

export default App

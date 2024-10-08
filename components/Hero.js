import React from 'react'
import { Fugaz_One } from 'next/font/google';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Hero() {
  return (
    <div className='py-4 md:py-10 flex flex-col gap-4 sm:gap-8'>
      <h1 className={'text-5xl sm:text-text-6xl md:text-7xl text-center ' + fugaz.className}><span
      className='textGradient'>Gym Track</span> helps you track your <span className='textGradient'>daily</span> workouts!</h1>
      <p className='text-lg sm:text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]'
      >Track your workout record and see how you did 
        <span className='font-semibold'> every day of every year!</span></p>
    </div>
  )
}

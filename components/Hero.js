import React from 'react'
import { Fugaz_One } from 'next/font/google';

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ['400'] });

export default function Hero() {
  return (
    <div className='py-10 sm:py-14 md:py-20'>
      <h1 className={'text-5xl sm:text-text-6xl md:text-7xl text-center ' + fugaz.className}><span
      className='textGradient'>Gym Track</span> helps you track your <span className='textGradient'>daily</span> workouts!</h1>
    </div>
  )
}

import React from 'react'
import { Scroll } from '../../components'

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center flex-1 gap-8 ">
      <div className="bg-contain h-60 bg-hero-pattern-mobile md:hidden"></div>
      <div className="absolute hidden bg-cover md:block -left-44 h-80 w-80 bg-illustration-hero-left lg:-left-20"></div>
      <div className="absolute hidden bg-cover md:block -right-44 h-80 w-80 bg-illustration-hero-right lg:-right-20"></div>
      <div className="flex flex-col items-center gap-8 p-5 md:max-w-[28.563rem] md:m-auto md:bg-bg-hero-squiggle md:bg-cover ">
        <h1 className="text-4xl font-bold leading-snug text-center">
          Get paid for the work you <span className="text-cyan-100">love</span>{' '}
          to do.
        </h1>
        <p className="text-center text-gray">
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you’re looking to escape the rat race or set up a
          side hustle, we’ve got you covered.
        </p>
        <Scroll />
      </div>
    </section>
  )
}

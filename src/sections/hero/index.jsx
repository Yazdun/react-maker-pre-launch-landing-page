import React from 'react'
import { motion } from 'framer-motion'
import { framer_desc, framer_icon, framer_title } from './framer'
import scrollAnimation from './lottie_scroll.json'
import Lottie from 'lottie-react'

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center flex-1 gap-8 ">
      <div className="bg-contain h-60 bg-hero-pattern-mobile md:hidden"></div>
      <div className="absolute hidden bg-cover md:block -left-44 h-80 w-80 bg-illustration-hero-left lg:-left-20"></div>
      <div className="absolute hidden bg-cover md:block -right-44 h-80 w-80 bg-illustration-hero-right lg:-right-20"></div>
      <div className="flex flex-col items-center gap-8 p-5 md:max-w-[28.563rem] md:m-auto md:bg-bg-hero-squiggle md:bg-contain bg-no-repeat bg-center ">
        <motion.h1
          {...framer_title}
          className="text-3xl font-bold leading-snug text-center md:text-4xl"
        >
          Get paid for the work you <span className="text-cyan-100">love</span>{' '}
          to do.
        </motion.h1>
        <motion.p {...framer_desc} className="text-center text-gray">
          The 9-5 grind is so last century. We believe in living life on your
          own terms. Whether you’re looking to escape the rat race or set up a
          side hustle, we’ve got you covered.
        </motion.p>
        <motion.a href="#showcase" {...framer_icon}>
          <Lottie animationData={scrollAnimation} loop={true} />
        </motion.a>
      </div>
    </section>
  )
}

import animation from './lottie_wow.json'
import Lottie from 'lottie-react'
import { useOnClickOutside } from '../../hooks'
import { useRef } from 'react'
import { VscChromeClose } from 'react-icons/vsc'
import { motion } from 'framer-motion'
import { framer_background, framer_modal } from './framer'

export const Modal = ({ email = 'john@gmail.com', fn }) => {
  const ref = useRef()

  useOnClickOutside(ref, () => fn())
  return (
    <motion.div
      {...framer_background}
      className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center p-5 bg-transparent backdrop-blur-sm"
    >
      <motion.div
        {...framer_modal}
        className="p-10 bg-gradient-to-t relative from-cyan-300 to-midnight rounded-md w-[100%] max-w-[35rem]"
        ref={ref}
      >
        <button
          className="absolute text-3xl text-white right-5 top-5"
          onClick={fn}
        >
          <VscChromeClose />
        </button>
        <div className="w-[200px] h-[200px] m-auto">
          <Lottie animationData={animation} loop={true} />
        </div>
        <h1 className="mb-2 text-lg font-extrabold text-center md:text-2xl md:mb-4">
          Thanks For Signing Up
        </h1>
        <p className="text-center text-gray">
          Confirmation email has been sent to{' '}
          <span className="font-bold text-white">{email}</span> , you have to
          confirm your email in order to get access to our pre-launch program.
        </p>
      </motion.div>
    </motion.div>
  )
}

import animation from './lottie_wow.json'
import Lottie from 'lottie-react'

export const Modal = ({ email = 'john@gmail.com' }) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center p-5 bg-transparent backdrop-blur-sm">
      <div className="p-10 bg-gradient-to-t from-cyan-300 to-midnight rounded-md w-[100%] max-w-[35rem] ">
        <div className="w-[200px] h-[200px] m-auto">
          <Lottie animationData={animation} loop={true} />
        </div>
        <h1 className="mb-2 text-lg font-extrabold text-center md:text-2xl md:mb-4">
          Thanks For Signing Up
        </h1>
        <p className="text-center text-gray">
          Confirmation email has been sent to{' '}
          <span className="font-bold text-white">{email}</span> , you have to
          confirm your email in order to get access to our pre-launch program{' '}
        </p>
      </div>
    </div>
  )
}

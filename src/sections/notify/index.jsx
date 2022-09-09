import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Error, Modal } from '../../components'
import { email_validation } from './validation'

export const Notify = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  const error = errors.email?.message

  const [{ email, submitted }, setState] = useState({
    email: null,
    submitted: false,
  })

  const closeModal = () => {
    setState({ submitted: false, email })
  }

  const onSubmit = data => {
    setState({ email: data.email, submitted: true })
    reset()
  }

  return (
    <>
      <section className="container p-5 mx-auto mb-40 space-y-10 bg-no-repeat bg-contain bg-bg-footer-squiggle">
        <h2 className="text-3xl font-bold text-center">
          Get notified when we launch
        </h2>
        <form
          noValidate
          autoComplete="off"
          className="flex justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-end gap-5 w-[100%] max-w-[29rem] m-auto">
            <div className="flex flex-col w-[80%]">
              <div className="flex justify-between mb-2">
                <label htmlFor="email">Email Address</label>
                <AnimatePresence initial={false} exitBeforeEnter>
                  {error && <Error message={error} key={error} />}
                </AnimatePresence>
              </div>
              <input
                className="p-3 transition-all duration-500 rounded-md bg-cyan-200 focus:outline-none hover:bg-cyan-300 focus:bg-cyan-300"
                type="email"
                id="email"
                placeholder="john@gmail.com"
                {...register('email', email_validation)}
              />
            </div>
            <button className="p-3 font-bold transition-all duration-500 rounded-md bg-cyan-100 text-midnight hover:bg-cyan-400">
              Submit
            </button>
          </div>
        </form>
      </section>
      <AnimatePresence initial={false}>
        {submitted && <Modal email={email} fn={closeModal} />}
      </AnimatePresence>
    </>
  )
}

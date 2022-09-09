import { motion } from 'framer-motion'
import { framer_desc, framer_image, framer_title } from './framer'
import { useWindowSize } from '../../hooks'

export const Benefit = ({ info, idx }) => {
  const { title, desc, Illustration } = info

  const { width } = useWindowSize()
  const isDesktop = width > 976

  return (
    <div className="flex max-w-[32rem] flex-col items-center gap-5 text-center md:flex-row md:text-left lg:flex-col lg:text-center">
      <motion.div
        {...framer_image(idx, isDesktop)}
        className="flex w-[150px] h-[150px] items-center justify-center p-5 rounded-3xl bg-gradient-to-tr from-cyan-200 to-cyan-500 min-w-[150px] min-h-150px"
      >
        <Illustration />
      </motion.div>
      <div className="space-y-5">
        <motion.h2 {...framer_title(isDesktop)} className="font-bold">
          {title}
        </motion.h2>
        <motion.p {...framer_desc(isDesktop)} className="text-gray">
          {desc}
        </motion.p>
      </div>
    </div>
  )
}

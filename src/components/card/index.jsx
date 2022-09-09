import { BsCheckLg } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { framer_card, framer_icon, framer_text } from './framer'

export const Card = ({ info, ltr }) => {
  const { title, desc, price, isFree, Icon, options } = info
  const theme = isFree
    ? 'bg-cyan-200'
    : 'bg-cyan-100 md: text-midnight bg-gradient-to-tr from-cyan-100 to-sky'
  return (
    <motion.article
      {...framer_card(ltr)}
      className={`relative p-8 rounded-xl space-y-5 md:w-[50%] max-w-[30rem] ${theme}`}
    >
      <div
        className={`absolute ${isFree ? '-top-5 left-51' : '-top-10 left-51'} `}
      >
        <Icon />
      </div>
      <p className="font-extrabold">{title}</p>
      <p className={isFree && 'text-slate'}>{desc}</p>
      {isFree ? (
        <p className="text-4xl font-bold">Free</p>
      ) : (
        <p className="flex gap-2 text-4xl font-bold">
          ${price + '.00'} <span className="mt-1 text-sm">/ month</span>
        </p>
      )}
      <ul className="space-y-2">
        {options.map((item, idx) => {
          return (
            <li className="flex items-center gap-2 font-semibold" key={item}>
              <motion.div {...framer_icon(idx)}>
                <BsCheckLg className={isFree && 'text-cyan-100'} />
              </motion.div>
              <motion.span {...framer_text(idx)}>{item}</motion.span>
            </li>
          )
        })}
      </ul>
    </motion.article>
  )
}

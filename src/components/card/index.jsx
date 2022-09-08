import { BsCheckLg } from 'react-icons/bs'

export const Card = ({ info }) => {
  const { title, desc, price, isFree, Icon, options } = info
  const theme = isFree
    ? 'bg-cyan-200'
    : 'bg-cyan-100 md: text-midnight md:scale-105'
  return (
    <article
      className={`relative p-8 rounded-xl space-y-5 md:w-[50%] ${theme}`}
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
        {options.map(item => {
          return (
            <li className="flex items-center gap-2 font-semibold" key={item}>
              <BsCheckLg className={isFree && 'text-cyan-100'} />
              {item}
            </li>
          )
        })}
      </ul>
    </article>
  )
}

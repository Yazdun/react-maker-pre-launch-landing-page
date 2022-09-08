import React from 'react'

export const Benefit = ({ info }) => {
  const { title, desc, Illustration } = info

  return (
    <div className="flex max-w-[32rem] flex-col items-center gap-5 text-center md:flex-row md:text-left lg:flex-col lg:items-start">
      <div className="flex w-[150px] h-[150px] items-center justify-center p-5 rounded-3xl bg-cyan-200 min-w-[150px] min-h-150px">
        <Illustration />
      </div>
      <div className="space-y-5">
        <h2 className="font-bold">{title}</h2>
        <p className="text-gray">{desc}</p>
      </div>
    </div>
  )
}

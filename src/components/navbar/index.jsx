import React from 'react'
import { Logo } from '../'

export const Navbar = () => {
  return (
    <nav className="container absolute top-0 left-0 right-0 flex justify-center p-5 m-auto md:justify-start ">
      <Logo />
    </nav>
  )
}

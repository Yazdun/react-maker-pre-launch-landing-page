import React from 'react'
import { Logo } from '../'

export const Navbar = () => {
  return (
    <nav className="container absolute top-0 flex justify-center p-5 m-auto md:justify-start md:static">
      <Logo />
    </nav>
  )
}

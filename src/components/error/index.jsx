import React from 'react'
import { motion } from 'framer-motion'
import { framer_error } from './framer'

export const Error = ({ message }) => {
  return (
    <motion.p
      className="px-2 rounded-md bg-danger-200 text-danger-100"
      {...framer_error}
    >
      {message}
    </motion.p>
  )
}

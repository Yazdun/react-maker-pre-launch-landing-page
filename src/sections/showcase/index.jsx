import { data } from './data'
import React from 'react'

export const Showcase = () => {
  return (
    <ul>
      {data.map(item => {
        const { title, desc, Illustration } = item
        return <li key={title}>{title}</li>
      })}
    </ul>
  )
}

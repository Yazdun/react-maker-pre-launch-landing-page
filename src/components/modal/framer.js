export const framer_background = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
}

export const framer_modal = {
  initial: { y: '5%', opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: '5%', opacity: 0 },
  transition: { duration: 0.3 },
}

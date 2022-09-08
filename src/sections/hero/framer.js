export const framer_title = {
  initial: { opacity: 0, y: -50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export const framer_desc = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay: 0.3 },
  viewport: { once: true },
}

export const framer_icon = {
  initial: { scale: 0 },
  whileInView: { scale: 1 },
  transition: { delay: 0.6 },
  viewport: { once: true },
}

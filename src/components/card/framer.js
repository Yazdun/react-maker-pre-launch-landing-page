export const framer_card = ltr => {
  return {
    initial: { opacity: 0, x: ltr ? 50 : -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
  }
}

export const framer_icon = idx => {
  return {
    initial: { scale: 0 },
    whileInView: { scale: 1 },
    transition: { delay: 0.3 + idx / 5 },
    viewport: { once: true },
  }
}

export const framer_text = idx => {
  return {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { delay: 0.3 + idx / 5 },
    viewport: { once: true },
  }
}

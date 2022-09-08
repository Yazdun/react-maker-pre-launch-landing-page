export const framer_image = (idx, isDesktop) => {
  return {
    initial: { scale: 0 },
    whileInView: { scale: 1 },
    viewport: { once: true },
    transition: { delay: isDesktop ? 0 + idx / 5 : 0.2 },
  }
}

export const framer_title = isDesktop => {
  return {
    initial: { opacity: 0, y: -40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: isDesktop ? 0.8 : 0.4 },
  }
}

export const framer_desc = isDesktop => {
  return {
    initial: { opacity: 0, y: -20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: isDesktop ? 1 : 0.46 },
  }
}

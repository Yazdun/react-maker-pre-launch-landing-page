import { Navbar } from './components'
import { Hero, Notify, Pricing, Showcase } from './sections'
import { MotionConfig } from 'framer-motion'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex flex-col justify-center min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <Showcase />
      <Pricing />
      <Notify />
    </MotionConfig>
  )
}

export default App

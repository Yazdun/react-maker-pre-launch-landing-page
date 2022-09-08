import { Navbar } from './components'
import { Hero, Notify, Pricing, Showcase } from './sections'

function App() {
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <Showcase />
      <Pricing />
      <Notify />
    </>
  )
}

export default App

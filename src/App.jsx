import { Navbar } from './components'
import { Hero, Notify, Pricing, Showcase } from './sections'

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
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

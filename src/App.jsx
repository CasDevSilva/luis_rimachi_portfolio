import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'

const App = () => {
  return (
    <div className="max-w-6xl mx-auto px-40 flex flex-col gap-12">
        <Hero/>
        <Projects/>
        <About/>
    </div>
  )
}

export default App
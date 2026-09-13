import { useState } from 'react'
import type { Technology } from '../types'
import TechnologyGrid from './TechnologyGrid'
import YourStack from './YourStack'

function TechnologiesSection() {
  const [selectedStack, setSelectedStack] = useState<Technology[]>([])

  const handleAddToStack = (technology: Technology) => {
    setSelectedStack((current) =>
      current.some((item) => item.id === technology.id) ? current : [...current, technology],
    )
  }

  const handleRemoveFromStack = (id: string) => {
    setSelectedStack((current) => current.filter((item) => item.id !== id))
  }

  const handleRemoveAll = () => setSelectedStack([])

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Explore the <span className="brand-gradient-text">Technologies</span>
      </h2>
      <p className="mt-2 text-slate-600">Pick one technology per category to build your ideal stack.</p>

      <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-4 lg:items-start">
        <div className="lg:col-span-3">
          <TechnologyGrid onAdd={handleAddToStack} />
        </div>

        <YourStack
          selectedStack={selectedStack}
          onRemove={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  )
}

export default TechnologiesSection

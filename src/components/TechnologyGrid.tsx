import { useEffect, useState } from 'react'
import type { Technology } from '../types'
import TechnologyCard from './TechnologyCard'

function TechnologyGrid() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/technologies.json')
      .then((response) => response.json())
      .then((data: Technology[]) => setTechnologies(data))
      .catch((error) => console.error('Failed to load technologies:', error))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Explore the <span className="brand-gradient-text">Technologies</span>
      </h2>
      <p className="mt-2 text-slate-600">Pick one technology per category to build your ideal stack.</p>

      {isLoading ? (
        <div className="flex items-center justify-center py-24">
          <span className="loading loading-spinner loading-lg text-[var(--color-brand-via)]" />
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology, index) => (
            <TechnologyCard key={technology.id} technology={technology} colorIndex={index} />
          ))}
        </div>
      )}
    </section>
  )
}

export default TechnologyGrid

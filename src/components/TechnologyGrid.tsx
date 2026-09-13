import { useEffect, useState } from 'react'
import type { Technology } from '../types'
import TechnologyCard from './TechnologyCard'

interface TechnologyGridProps {
  selectedIds: Set<string>
  onAdd: (technology: Technology) => void
}

function TechnologyGrid({ selectedIds, onAdd }: TechnologyGridProps) {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/technologies.json')
      .then((response) => response.json())
      .then((data: Technology[]) => setTechnologies(data))
      .catch((error) => console.error('Failed to load technologies:', error))
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24">
        <span className="loading loading-spinner loading-lg text-[var(--color-brand-via)]" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology, index) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          colorIndex={index}
          isSelected={selectedIds.has(technology.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  )
}

export default TechnologyGrid

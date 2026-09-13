import type { Technology } from '../types'

// A small rotating palette so badges don't all look the same — cycled by
// card position, not stored per item, since the color is purely visual.
const badgeColors = [
  'bg-pink-100 text-pink-600',
  'bg-emerald-100 text-emerald-600',
  'bg-orange-100 text-orange-600',
  'bg-teal-100 text-teal-600',
  'bg-sky-100 text-sky-600',
  'bg-red-100 text-red-600',
  'bg-amber-100 text-amber-700',
  'bg-blue-100 text-blue-600',
  'bg-yellow-100 text-yellow-700',
  'bg-cyan-100 text-cyan-600',
]

interface TechnologyCardProps {
  technology: Technology
  colorIndex: number
  onAdd: (technology: Technology) => void
}

function TechnologyCard({ technology, colorIndex, onAdd }: TechnologyCardProps) {
  const badgeColor = badgeColors[colorIndex % badgeColors.length]

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={`${technology.name} logo`}
          className="h-10 w-10 object-contain"
        />
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}>
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{technology.name}</h3>
      <p className="mt-2 flex-1 text-sm text-slate-600">{technology.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
          {technology.category}
        </span>
        <span className="text-xs text-slate-500">{technology.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-sm font-semibold text-slate-700">
          <span className="text-amber-400">★</span>
          {technology.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        className="mt-5 w-full cursor-pointer rounded-lg bg-slate-900 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
      >
        Add to Stack
      </button>
    </div>
  )
}

export default TechnologyCard

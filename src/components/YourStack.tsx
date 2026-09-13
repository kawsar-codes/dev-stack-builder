import type { Technology } from '../types'

interface YourStackProps {
  selectedStack: Technology[]
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

function YourStack({ selectedStack, onRemove, onRemoveAll }: YourStackProps) {
  const isEmpty = selectedStack.length === 0

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-6 lg:sticky lg:top-24">
      <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-400">
        {isEmpty ? 'No technologies selected yet.' : `${selectedStack.length} Technology Selected`}
      </p>

      {isEmpty ? (
        <div className="mt-6 rounded-xl border border-dashed border-slate-200 py-10 text-center text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <div className="mt-6 flex flex-col gap-3">
            {selectedStack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-slate-200 p-3"
              >
                <img
                  src={technology.icon}
                  alt={`${technology.name} logo`}
                  className="h-8 w-8 object-contain"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">{technology.name}</p>
                  <p className="text-xs text-slate-400">{technology.category}</p>
                </div>
                <button
                  type="button"
                  onClick={() => onRemove(technology.id)}
                  aria-label={`Remove ${technology.name} from stack`}
                  className="cursor-pointer text-slate-400 hover:text-slate-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-6 w-full cursor-pointer rounded-lg border border-red-200 py-3 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  )
}

export default YourStack

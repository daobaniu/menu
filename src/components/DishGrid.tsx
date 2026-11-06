import type { Dish } from '../data/dishes'
import { DishImage } from './DishImage'

type Props = {
  dishes: Dish[]
  selectedIds: Set<string>
  onToggle: (id: string) => void
}

export function DishGrid({ dishes, selectedIds, onToggle }: Props) {
  if (dishes.length === 0) {
    return (
      <p className="py-16 text-center text-[var(--ink-muted)]">
        这一类暂时没有菜，换个分类看看。
      </p>
    )
  }

  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {dishes.map((dish, index) => {
        const selected = selectedIds.has(dish.id)
        return (
          <li
            key={dish.id}
            className="dish-enter"
            style={{ animationDelay: `${Math.min(index, 12) * 40}ms` }}
          >
            <button
              type="button"
              onClick={() => onToggle(dish.id)}
              aria-pressed={selected}
              className={[
                'group w-full text-left outline-none transition',
                'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]',
              ].join(' ')}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-muted)]">
                <DishImage
                  src={dish.imageUrl}
                  alt={dish.name}
                  className={[
                    'h-full w-full object-cover transition duration-500 ease-out',
                    'group-hover:scale-[1.03]',
                    selected ? 'brightness-95' : '',
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute right-3 top-3 flex h-8 w-8 items-center justify-center',
                    'border-2 transition duration-200',
                    selected
                      ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                      : 'border-white/80 bg-black/25 text-transparent backdrop-blur-[2px] group-hover:border-white',
                  ].join(' ')}
                  aria-hidden
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
                  </svg>
                </span>
                <span className="absolute bottom-3 left-3 bg-[var(--ink)]/70 px-2 py-0.5 text-xs tracking-wider text-[var(--paper)] backdrop-blur-sm">
                  {dish.category}
                </span>
              </div>
              <div className="mt-3 flex items-start justify-between gap-3">
                <div>
                  <h3
                    className={[
                      'font-display text-xl tracking-wide transition-colors',
                      selected ? 'text-[var(--accent)]' : 'text-[var(--ink)]',
                    ].join(' ')}
                  >
                    {dish.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--ink-muted)]">
                    {dish.blurb}
                  </p>
                </div>
                <span
                  className={[
                    'shrink-0 pt-1 text-xs tracking-widest transition',
                    selected
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--ink-faint)] group-hover:text-[var(--ink-muted)]',
                  ].join(' ')}
                >
                  {selected ? '已选' : '点选'}
                </span>
              </div>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

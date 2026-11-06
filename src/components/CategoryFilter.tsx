import type { Category } from '../data/dishes'
import { categories } from '../data/dishes'

type Filter = '全部' | Category

type Props = {
  value: Filter
  onChange: (next: Filter) => void
}

export function CategoryFilter({ value, onChange }: Props) {
  return (
    <div
      className="flex flex-wrap gap-2 sm:gap-3"
      role="tablist"
      aria-label="按分类筛选"
    >
      {categories.map((cat) => {
        const active = value === cat
        return (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(cat)}
            className={[
              'px-3.5 py-1.5 text-sm tracking-wide transition-colors duration-200',
              'border-b-2 rounded-none',
              active
                ? 'border-[var(--accent)] text-[var(--ink)] font-medium'
                : 'border-transparent text-[var(--ink-muted)] hover:text-[var(--ink)]',
            ].join(' ')}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}

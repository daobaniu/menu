import type { Dish } from '../data/dishes'

type Props = {
  selected: Dish[]
  onClear: () => void
  onRemove: (id: string) => void
}

export function SelectedSummary({ selected, onClear, onRemove }: Props) {
  const count = selected.length

  return (
    <aside
      id="selected-summary"
      className="border-t border-[var(--line)] bg-[var(--surface)]/90 backdrop-blur-sm"
      aria-live="polite"
    >
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-display text-xl text-[var(--ink)] sm:text-2xl">
              已选 {count} 道
            </p>
            <p className="mt-1 text-sm text-[var(--ink-muted)]">
              {count === 0
                ? '点选菜品，两人各自勾想吃的；选择保存在本浏览器。'
                : '今晚就做这些——可再点取消，或一键清空。'}
            </p>
          </div>
          {count > 0 && (
            <button
              type="button"
              onClick={onClear}
              className="text-sm text-[var(--ink-muted)] underline-offset-4 transition hover:text-[var(--accent)] hover:underline"
            >
              清空全部
            </button>
          )}
        </div>

        {count > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {selected.map((dish) => (
              <li key={dish.id}>
                <button
                  type="button"
                  onClick={() => onRemove(dish.id)}
                  className="group inline-flex items-center gap-1.5 bg-[var(--surface-muted)] px-3 py-1.5 text-sm text-[var(--ink)] transition hover:bg-[var(--accent-soft)]"
                  title={`取消选择「${dish.name}」`}
                >
                  <span>{dish.name}</span>
                  <span
                    className="text-[var(--ink-muted)] transition group-hover:text-[var(--accent)]"
                    aria-hidden
                  >
                    ×
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  )
}

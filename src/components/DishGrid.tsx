import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Check } from 'lucide-react'
import type { Dish } from '@/data/dishes'
import { DishImage } from '@/components/DishImage'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

type Props = {
  dishes: Dish[]
  selectedIds: Set<string>
  onToggle: (id: string) => void
}

export function DishGrid({ dishes, selectedIds, onToggle }: Props) {
  const reduceMotion = useReducedMotion()

  if (dishes.length === 0) {
    return (
      <p className="py-16 text-center text-[var(--ink-muted)]">
        这一类暂时没有菜，换个分类看看。
      </p>
    )
  }

  return (
    <ul className="grid grid-cols-1 gap-x-7 gap-y-11 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {dishes.map((dish) => {
          const selected = selectedIds.has(dish.id)
          return (
            <motion.li
              key={dish.id}
              layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={() => onToggle(dish.id)}
                aria-pressed={selected}
                className={cn(
                  'group w-full text-left outline-none',
                  'focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]',
                )}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-muted)]">
                  <DishImage
                    src={dish.imageUrl}
                    alt={dish.name}
                    className={cn(
                      'h-full w-full object-cover transition duration-500 ease-out',
                      'group-hover:scale-[1.03]',
                      selected && 'brightness-[0.92]',
                    )}
                  />
                  <motion.span
                    layout
                    className={cn(
                      'absolute right-3 top-3 flex h-8 w-8 items-center justify-center border-2',
                      selected
                        ? 'border-[var(--accent)] bg-[var(--accent)] text-[var(--paper)]'
                        : 'border-white/85 bg-[var(--ink)]/20 text-transparent backdrop-blur-[2px] group-hover:border-white',
                    )}
                    animate={
                      reduceMotion
                        ? undefined
                        : selected
                          ? { scale: [1, 1.12, 1] }
                          : { scale: 1 }
                    }
                    transition={{ duration: 0.28 }}
                    aria-hidden
                  >
                    <Check className="h-4 w-4" strokeWidth={2.4} />
                  </motion.span>
                  <Badge
                    variant="solid"
                    className="absolute bottom-3 left-3 bg-[var(--ink)]/75 backdrop-blur-sm"
                  >
                    {dish.category}
                  </Badge>
                </div>
                <div className="mt-3 flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className={cn(
                        'font-display text-[1.35rem] leading-snug tracking-wide transition-colors',
                        selected ? 'text-[var(--accent)]' : 'text-[var(--ink)]',
                      )}
                    >
                      {dish.name}
                    </h3>
                    <p className="mt-1 max-w-[28ch] text-sm leading-relaxed text-[var(--ink-muted)]">
                      {dish.blurb}
                    </p>
                  </div>
                  <span
                    className={cn(
                      'shrink-0 pt-1 text-xs tracking-wide transition',
                      selected
                        ? 'text-[var(--accent)]'
                        : 'text-[var(--ink-faint)] group-hover:text-[var(--ink-muted)]',
                    )}
                  >
                    {selected ? '已选' : '点选'}
                  </span>
                </div>
              </button>
            </motion.li>
          )
        })}
      </AnimatePresence>
    </ul>
  )
}

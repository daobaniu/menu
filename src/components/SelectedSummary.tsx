import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'motion/react'
import { X } from 'lucide-react'
import type { Dish } from '@/data/dishes'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'

type Props = {
  selected: Dish[]
  onClear: () => void
  onRemove: (id: string) => void
}

export function SelectedSummary({ selected, onClear, onRemove }: Props) {
  const count = selected.length
  const reduceMotion = useReducedMotion()

  return (
    <aside
      id="selected-summary"
      className="sticky bottom-0 z-20 border-t border-[var(--line)] bg-[var(--surface)]/92 backdrop-blur-md"
      aria-live="polite"
    >
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-display text-xl text-[var(--ink)] sm:text-2xl">
              今晚已选 {count} 道
            </p>
            <p className="mt-1 text-sm text-[var(--ink-muted)]">
              {count === 0
                ? '点菜品图勾选想吃的；选择只保存在本浏览器。'
                : '再点一次可取消，或清空后重选。'}
            </p>
          </div>
          <AnimatePresence>
            {count > 0 && (
              <motion.div
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
              >
                <Button type="button" variant="link" size="sm" onClick={onClear}>
                  清空全部
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence initial={false}>
          {count > 0 && (
            <motion.div
              key="tray"
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <Separator className="my-3" />
              <ScrollArea className="w-full whitespace-nowrap">
                <LayoutGroup>
                  <ul className="flex w-max gap-2 pb-1">
                    <AnimatePresence mode="popLayout">
                      {selected.map((dish) => (
                        <motion.li
                          key={dish.id}
                          layout={!reduceMotion}
                          initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={
                            reduceMotion
                              ? undefined
                              : { opacity: 0, scale: 0.9 }
                          }
                          transition={{ duration: 0.2 }}
                        >
                          <button
                            type="button"
                            onClick={() => onRemove(dish.id)}
                            title={`取消选择「${dish.name}」`}
                            className="outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                          >
                            <Badge
                              variant="accent"
                              className="cursor-pointer pr-1.5 hover:bg-[var(--accent)] hover:text-[var(--paper)]"
                            >
                              <span>{dish.name}</span>
                              <X className="h-3.5 w-3.5 opacity-70" />
                            </Badge>
                          </button>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </LayoutGroup>
              </ScrollArea>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  )
}

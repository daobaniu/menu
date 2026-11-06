import { useMemo, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { CategoryFilter } from '@/components/CategoryFilter'
import { DishGrid } from '@/components/DishGrid'
import { DishImage } from '@/components/DishImage'
import { SelectedSummary } from '@/components/SelectedSummary'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  type Category,
  dishes,
  heroImageUrl,
} from '@/data/dishes'
import { useSelections } from '@/hooks/useSelections'

type Filter = '全部' | Category

export default function App() {
  const [filter, setFilter] = useState<Filter>('全部')
  const { toggle, clear, selectedSet } = useSelections()
  const reduceMotion = useReducedMotion()

  const visible = useMemo(
    () =>
      filter === '全部'
        ? dishes
        : dishes.filter((d) => d.category === filter),
    [filter],
  )

  const selectedDishes = useMemo(
    () => dishes.filter((d) => selectedSet.has(d.id)),
    [selectedSet],
  )

  return (
    <div className="min-h-dvh text-[var(--ink)]">
      <header className="relative isolate min-h-[min(92dvh,820px)] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 16, ease: 'linear' }}
        >
          <DishImage
            src={heroImageUrl}
            alt="红烧肉"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="hero-veil absolute inset-0" aria-hidden />

        <div className="relative z-10 flex min-h-[min(92dvh,820px)] flex-col justify-end px-5 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-16">
          <motion.p
            className="font-display text-5xl leading-none tracking-[0.08em] text-[var(--paper)] sm:text-7xl lg:text-8xl"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            家常菜单
          </motion.p>

          <motion.h1
            className="mt-5 max-w-lg text-lg font-normal leading-relaxed text-[var(--paper)]/90 sm:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: reduceMotion ? 0 : 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            今晚吃什么？翻一翻，勾一勾。
          </motion.h1>

          <motion.p
            className="mt-3 max-w-md text-sm leading-relaxed text-[var(--paper)]/70 sm:text-base"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: reduceMotion ? 0 : 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            二十六道家常菜。两人打开同一链接，各自点想吃的。
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: reduceMotion ? 0 : 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Button asChild size="lg">
              <a href="#menu">开始选菜</a>
            </Button>
            <Button asChild variant="ghost" className="text-[var(--paper)]/85 hover:bg-white/10 hover:text-[var(--paper)]">
              <a href="#selected-summary">查看已选</a>
            </Button>
          </motion.div>
        </div>
      </header>

      <main id="menu" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl tracking-wide text-[var(--ink)] sm:text-4xl">
              今日菜谱
            </h2>
            <p className="mt-2 text-sm text-[var(--ink-muted)] sm:text-base">
              点图片勾选或取消，共 {dishes.length} 道。
            </p>
          </div>
          <CategoryFilter value={filter} onChange={setFilter} />
        </div>

        <Separator className="mt-8 mb-10" />

        <DishGrid
          dishes={visible}
          selectedIds={selectedSet}
          onToggle={toggle}
        />
      </main>

      <SelectedSummary
        selected={selectedDishes}
        onClear={clear}
        onRemove={toggle}
      />

      <footer className="border-t border-[var(--line)] px-4 py-8 text-center text-xs text-[var(--ink-faint)] sm:px-6">
        家常菜单 · 纯静态页面，无需登录 · 选择保存在本机浏览器
      </footer>
    </div>
  )
}

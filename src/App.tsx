import { useMemo, useState } from 'react'
import { CategoryFilter } from './components/CategoryFilter'
import { DishGrid } from './components/DishGrid'
import { DishImage } from './components/DishImage'
import { SelectedSummary } from './components/SelectedSummary'
import {
  type Category,
  dishes,
  heroImageUrl,
} from './data/dishes'
import { useSelections } from './hooks/useSelections'

type Filter = '全部' | Category

export default function App() {
  const [filter, setFilter] = useState<Filter>('全部')
  const { toggle, clear, selectedSet } = useSelections()

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
    <div className="min-h-dvh bg-[var(--bg)] text-[var(--ink)]">
      <header className="hero relative isolate min-h-[min(92dvh,820px)] overflow-hidden">
        <DishImage
          src={heroImageUrl}
          alt="红烧肉"
          className="absolute inset-0 h-full w-full object-cover hero-zoom"
        />
        <div className="hero-veil absolute inset-0" aria-hidden />
        <div className="relative z-10 flex min-h-[min(92dvh,820px)] flex-col justify-end px-5 pb-14 pt-20 sm:px-10 sm:pb-20 lg:px-16">
          <p className="brand-reveal font-display text-5xl leading-none tracking-[0.12em] text-[var(--paper)] sm:text-7xl lg:text-8xl">
            家常菜单
          </p>
          <h1 className="headline-reveal mt-5 max-w-xl font-sans text-lg font-normal leading-relaxed text-[var(--paper)]/90 sm:text-xl">
            今晚吃什么？翻一翻，勾一勾。
          </h1>
          <p className="copy-reveal mt-3 max-w-md text-sm leading-relaxed text-[var(--paper)]/70 sm:text-base">
            二十六道家常菜，两人各自点想吃的；选择只保存在本浏览器，方便分享链接一起看。
          </p>
          <div className="cta-reveal mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="inline-flex items-center bg-[var(--accent)] px-6 py-3 text-sm tracking-widest text-white transition hover:bg-[var(--accent-deep)]"
            >
              开始选菜
            </a>
            <a
              href="#selected-summary"
              className="text-sm tracking-wide text-[var(--paper)]/80 underline-offset-4 transition hover:text-[var(--paper)] hover:underline"
            >
              查看已选
            </a>
          </div>
        </div>
      </header>

      <main id="menu" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl tracking-wide text-[var(--ink)] sm:text-4xl">
              今日菜谱
            </h2>
            <p className="mt-2 text-sm text-[var(--ink-muted)] sm:text-base">
              点图片即可勾选或取消，共 {dishes.length} 道。
            </p>
          </div>
          <CategoryFilter value={filter} onChange={setFilter} />
        </div>

        <div className="mt-10">
          <DishGrid
            dishes={visible}
            selectedIds={selectedSet}
            onToggle={toggle}
          />
        </div>
      </main>

      <SelectedSummary
        selected={selectedDishes}
        onClear={clear}
        onRemove={toggle}
      />

      <footer className="border-t border-[var(--line)] px-4 py-8 text-center text-xs text-[var(--ink-faint)] sm:px-6">
        家常菜单 · 纯静态页面，无需登录 · 选择保存在本机浏览器 localStorage
      </footer>
    </div>
  )
}

import type { Category } from '@/data/dishes'
import { categories } from '@/data/dishes'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

type Filter = '全部' | Category

type Props = {
  value: Filter
  onChange: (next: Filter) => void
}

export function CategoryFilter({ value, onChange }: Props) {
  return (
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(next) => {
        if (next) onChange(next as Filter)
      }}
      variant="outline"
      size="sm"
      aria-label="按分类筛选"
      className="justify-start"
    >
      {categories.map((cat) => (
        <ToggleGroupItem
          key={cat}
          value={cat}
          aria-label={cat}
          className="min-w-14 tracking-wide"
        >
          {cat}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  )
}

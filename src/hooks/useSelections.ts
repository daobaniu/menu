import { useEffect, useState } from 'react'

const STORAGE_KEY = 'jiachang-menu-selections'

function readStored(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((id): id is string => typeof id === 'string')
  } catch {
    return []
  }
}

export function useSelections() {
  const [selectedIds, setSelectedIds] = useState<string[]>(() =>
    typeof window === 'undefined' ? [] : readStored(),
  )

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedIds))
  }, [selectedIds])

  function toggle(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
  }

  function clear() {
    setSelectedIds([])
  }

  return { selectedIds, toggle, clear, selectedSet: new Set(selectedIds) }
}

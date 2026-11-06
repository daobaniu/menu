import { useState } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  src: string
  alt: string
  className?: string
}

/** Graceful fallback when Commons images fail to load */
export function DishImage({ src, alt, className = '' }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-[var(--surface-muted)] text-[var(--ink-muted)]',
          className,
        )}
        aria-label={alt}
      >
        <span className="font-display text-2xl tracking-widest opacity-50">
          菜
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      className={className}
      onError={() => setFailed(true)}
    />
  )
}

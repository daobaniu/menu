import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center gap-1.5 border px-2.5 py-1 text-xs transition-colors',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-[var(--surface-muted)] text-[var(--ink)]',
        accent:
          'border-transparent bg-[var(--accent-soft)] text-[var(--accent-deep)]',
        outline: 'border-[var(--line)] text-[var(--ink-muted)]',
        solid: 'border-transparent bg-[var(--ink)] text-[var(--paper)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type BadgeProps = React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants>

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

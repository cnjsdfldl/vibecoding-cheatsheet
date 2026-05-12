import type { ReactNode } from 'react'

interface Column<T> {
  key: keyof T | string
  header: ReactNode
  render?: (row: T) => ReactNode
  className?: string
}

interface Props<T> {
  columns: Column<T>[]
  rows: T[]
  caption?: ReactNode
}

export default function ComparisonTable<T extends Record<string, any>>({ columns, rows, caption }: Props<T>) {
  return (
    <div className="my-4 overflow-x-auto border border-line/80 rounded-md bg-bg-elev/40">
      {caption && (
        <div className="px-3 py-1.5 text-xs text-fg-dim border-b border-line/60 bg-bg-elev2/40">{caption}</div>
      )}
      <table className="w-full text-[13px]">
        <thead>
          <tr className="text-left text-cyan border-b border-line/60">
            {columns.map((c, i) => (
              <th key={i} className={`py-2 px-3 font-semibold uppercase tracking-wider text-[11px] ${c.className ?? ''}`}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-line/40 last:border-0 hover:bg-cyan/[0.03]">
              {columns.map((c, j) => (
                <td key={j} className={`py-2 px-3 align-top ${c.className ?? ''}`}>
                  {c.render ? c.render(row) : String(row[c.key as keyof T] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

import type { ReactNode } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import SearchPalette from './SearchPalette'
import { openSearch } from '@/lib/search-bus'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenSearch={openSearch} />

      <div className="flex-1 max-w-[1400px] w-full mx-auto px-3 sm:px-4 grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)_260px] xl:grid-cols-[280px_minmax(0,1fr)_280px] gap-4">
        <aside className="hidden lg:block sticky top-[80px] self-start max-h-[calc(100vh-80px)] overflow-y-auto">
          <Sidebar />
        </aside>

        <main className="min-w-0 py-6">{children}</main>

        <div className="hidden lg:block" aria-hidden />
      </div>

      <Footer />
      <SearchPalette />
    </div>
  )
}

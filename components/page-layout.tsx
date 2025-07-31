import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface PageLayoutProps {
  children: React.ReactNode
  showBackgroundShapes?: boolean
}

export function PageLayout({ children, showBackgroundShapes = false }: PageLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {showBackgroundShapes && (
        <>
          <div className="absolute top-0 left-0 w-[70vw] h-[120vh] bg-[#E0F2F7] rounded-br-[50%] -translate-x-1/4 -translate-y-1/4 z-0" />
          <div className="absolute top-0 right-0 w-[60vw] h-[100vh] bg-white rounded-bl-[50%] translate-x-1/4 -translate-y-1/4 z-0" />
          <div className="absolute bottom-0 right-0 w-[50vw] h-[80vh] bg-[#1A5276] rounded-tl-[50%] translate-x-1/4 translate-y-1/4 z-0" />
        </>
      )}

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

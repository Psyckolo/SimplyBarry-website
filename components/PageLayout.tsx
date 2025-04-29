import type React from "react"

interface PageLayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div
      className="min-h-screen pt-20"
      style={{
        backgroundImage: "url('/background-wood.jpeg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white bg-opacity-98 rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">{children}</div>
      </div>
    </div>
  )
}

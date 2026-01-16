import type React from "react"

// This root layout is required but most logic is in [locale]/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

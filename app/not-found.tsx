import Link from "next/link"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import { ArrowLeft } from "lucide-react"
import "./globals.css"

export const metadata: Metadata = {
  title: "404 - Página no encontrada | Page not found",
  description: "La página que buscas no existe. The page you are looking for does not exist.",
}

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
})

export default function NotFound() {
  return (
    <html lang="es" className={nunito.variable}>
      <body className="font-sans antialiased">
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
          <h1 className="text-8xl font-bold mb-4 text-primary">404</h1>
          <p className="text-xl mb-2 text-center text-muted-foreground">
            Página no encontrada
          </p>
          <p className="text-xl mb-8 text-center text-muted-foreground">
            Page not found
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/es"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Link>
            <Link 
              href="/en"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium border border-primary text-primary hover:bg-primary/10 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}

import { createFileRoute } from "@tanstack/react-router"
import { Capabilities } from "@/components/capabilities"

import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main id="main" tabIndex={-1} className="flex-1">
        <Hero />
        <Capabilities />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

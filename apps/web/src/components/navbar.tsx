import { Button } from "@workspace/ui/components/button"
import { ArrowUpRight } from "lucide-react"

import { scrollToContact } from "@/components/contact-form"
import { DEMO_URL } from "@/lib/demo"
import { useI18n } from "@/lib/i18n"

export function Navbar() {
  const { locale, setLocale, t } = useI18n()
  return (
    <header>
      <a href="#main" className="skip-link">
        {t.nav.skip}
      </a>
      <nav
        aria-label={t.nav.label}
        className="mx-auto flex min-h-20 max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-4 sm:px-10"
      >
        <a
          href="#top"
          className="mr-auto rounded-sm text-xl font-medium tracking-tight"
        >
          Luwa
        </a>
        <div className="ml-auto flex items-center gap-3 sm:gap-6">
          <button
            type="button"
            onClick={() => setLocale(locale === "en" ? "fr" : "en")}
            aria-label={
              locale === "en" ? "Passer en français" : "Switch to English"
            }
            className="min-h-11 min-w-11 rounded-sm text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <span lang={locale === "en" ? "fr" : "en"}>
              {locale === "en" ? "FR" : "EN"}
            </span>
          </button>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex min-h-11 items-center rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.nav.reachOut}
          </a>
          <Button
            variant="outline"
            nativeButton={false}
            render={<a href={DEMO_URL} aria-label={t.nav.demoLabel} />}
            className="h-11 gap-2 rounded-lg px-4 shadow-none"
          >
            {t.nav.demo}
            <ArrowUpRight aria-hidden="true" className="size-3.5" />
          </Button>
        </div>
      </nav>
    </header>
  )
}

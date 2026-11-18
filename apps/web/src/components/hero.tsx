import { useEffect, useState } from "react"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Button } from "@workspace/ui/components/button"
import { ArrowUpRight } from "lucide-react"

import logoRotate from "@assets/logo_rotate.lottie?url"
import logo from "@assets/logo_medium.svg?url"
import { scrollToContact } from "@/components/contact-form"
import { DEMO_URL } from "@/lib/demo"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { t } = useI18n()
  // Start with a still image during SSR; honor changes to the system preference.
  const [reducedMotion, setReducedMotion] = useState(true)
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReducedMotion(preference.matches)
    update()
    preference.addEventListener("change", update)
    return () => preference.removeEventListener("change", update)
  }, [])

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-12 sm:px-10 sm:py-16 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-8 lg:py-20"
    >
      <div className="flex min-w-0 flex-col items-start">
        <p className="mb-5 text-[10px] font-medium tracking-[0.16em] text-muted-foreground sm:text-xs">
          {t.hero.eyebrow}
        </p>
        <h1
          id="hero-title"
          className="max-w-xl text-[clamp(2.25rem,4.1vw,3.5rem)] leading-[1.1] font-semibold tracking-[-0.04em] text-balance"
        >
          {t.hero.title}
        </h1>
        <p className="mt-5 max-w-md text-base leading-7 text-pretty text-muted-foreground sm:text-lg sm:leading-8">
          {t.hero.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            nativeButton={false}
            render={<a href={DEMO_URL} aria-label={t.nav.demoLabel} />}
            className="h-11 gap-2 rounded-lg px-5"
          >
            {t.hero.cta}
            <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={<a href="#contact" />}
            onClick={scrollToContact}
            className="h-11 rounded-lg px-5"
          >
            {t.hero.contact}
          </Button>
        </div>
        <p className="mt-4 text-xs leading-5 text-muted-foreground">
          {t.hero.caption}
        </p>
      </div>
      <div
        role="img"
        aria-label={t.hero.logo}
        className="mx-auto aspect-square w-full max-w-72 sm:max-w-80 md:max-w-96"
      >
        {reducedMotion ? (
          <span
            aria-hidden="true"
            className="block size-full bg-foreground"
            style={{
              mask: `url("${logo}") center / contain no-repeat`,
              WebkitMask: `url("${logo}") center / contain no-repeat`,
            }}
          />
        ) : (
          // Keep the original asset, playback defaults, and color treatment.
          <DotLottieReact
            src={logoRotate}
            loop
            autoplay
            className="size-full leading-[0] invert dark:invert-0"
          />
        )}
      </div>
    </section>
  )
}

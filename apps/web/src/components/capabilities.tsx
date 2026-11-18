import { useI18n } from "@/lib/i18n"

export function Capabilities() {
  const { t } = useI18n()
  const items = [
    t.capabilities.context,
    t.capabilities.analysis,
    t.capabilities.documentation,
  ]
  return (
    <section
      aria-label={t.capabilities.label}
      className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-10 sm:pb-20 md:pb-12"
    >
      <ol className="grid border-y border-border md:grid-cols-3 md:py-8">
        {items.map(({ title, description }, index) => (
          <li
            key={title}
            className="border-b border-border py-7 last:border-0 md:border-r md:border-b-0 md:px-6 md:py-0 md:first:pl-0"
          >
            <h2 className="flex items-baseline gap-2 text-sm font-medium">
              <span className="text-xs font-normal text-muted-foreground">
                0{index + 1} —
              </span>
              {title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}

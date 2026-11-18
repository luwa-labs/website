import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"

import appCss from "@workspace/ui/globals.css?url"

import { I18nProvider } from "@/lib/i18n"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Luwa — The right context. Better clinical decisions.",
      },
      {
        name: "description",
        content:
          "Luwa is building a clinical assistant that helps pharmacists understand patient records, analyze clinical information, and document their reasoning.",
      },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  notFoundComponent: () => (
    <main className="container mx-auto p-4 pt-16">
      <h1>404</h1>
      <p>The requested page could not be found.</p>
    </main>
  ),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
        <Scripts />
      </body>
    </html>
  )
}

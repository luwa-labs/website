import * as React from "react"

export type Locale = "en" | "fr"

const dictionary = {
  en: {
    nav: {
      reachOut: "Contact",
      demo: "Private demo",
      demoLabel: "Open the Luwa private beta demo",
      language: "Language",
      label: "Main navigation",
      skip: "Skip to content",
    },
    hero: {
      eyebrow: "AI FOR CLINICAL PRACTICE",
      title: "The right context. Better clinical decisions.",
      description:
        "Luwa brings patient information together to help pharmacists analyze clinical situations, make informed decisions, and document their reasoning.",
      cta: "Explore the demo",
      contact: "Get in touch",
      caption: "Private demo · Fictional patient data",
      logo: "Luwa animated geometric logo",
    },
    contact: {
      title: "Interested in exploring Luwa?",
      description:
        "We're collaborating with healthcare professionals to shape the next generation of clinical tools. Get in touch to learn more.",
      name: "Name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "How can we help?",
      submit: "Send message",
      sending: "Sending…",
      successTitle: "Message sent",
      successDescription: "Thanks. We'll get back to you soon.",
      errorTitle: "Message not sent",
      errorDescription: "Something went wrong. Please try again.",
      activationDescription: "Confirm the activation email, then try again.",
    },
    capabilities: {
      label: "Core capabilities",
      context: {
        title: "Patient context",
        description: "Relevant information, in one clinical picture.",
      },
      analysis: {
        title: "Clinical analysis",
        description: "Contextualize laboratory results and prescriptions.",
      },
      documentation: {
        title: "Documentation",
        description: "Turn clinical reasoning into structured notes.",
      },
    },
    footer: { built: "Built in Québec" },
  },
  fr: {
    nav: {
      reachOut: "Contact",
      demo: "Démo privée",
      demoLabel: "Ouvrir la démo privée de Luwa en bêta",
      language: "Langue",
      label: "Navigation principale",
      skip: "Aller au contenu",
    },
    hero: {
      eyebrow: "L'IA AU SERVICE DE LA PRATIQUE CLINIQUE",
      title: "Le bon contexte. De meilleures décisions cliniques.",
      description:
        "Luwa rassemble les informations pertinentes du patient pour aider les pharmaciens à analyser les situations cliniques, à prendre des décisions éclairées et à documenter leur raisonnement.",
      cta: "Explorer la démo",
      contact: "Nous joindre",
      caption: "Démo privée · Données patients fictives",
      logo: "Logo géométrique animé de Luwa",
    },
    contact: {
      title: "Envie d'en découvrir davantage sur Luwa ?",
      description:
        "Nous collaborons avec des professionnels de la santé pour développer des outils cliniques adaptés à leurs besoins. Contactez-nous pour en savoir plus.",
      name: "Nom",
      email: "Courriel",
      message: "Message",
      messagePlaceholder: "Comment pouvons-nous vous aider ?",
      submit: "Envoyer le message",
      sending: "Envoi…",
      successTitle: "Message envoyé",
      successDescription: "Merci. Nous vous répondrons bientôt.",
      errorTitle: "Message non envoyé",
      errorDescription: "Une erreur s'est produite. Veuillez réessayer.",
      activationDescription:
        "Confirmez le courriel d'activation, puis réessayez.",
    },
    capabilities: {
      label: "Fonctionnalités principales",
      context: {
        title: "Contexte patient",
        description:
          "Les informations pertinentes réunies dans un même portrait clinique.",
      },
      analysis: {
        title: "Analyse clinique",
        description:
          "Contextualiser les résultats de laboratoire et les ordonnances.",
      },
      documentation: {
        title: "Documentation",
        description:
          "Transformer le raisonnement clinique en notes structurées.",
      },
    },
    footer: { built: "Conçu au Québec" },
  },
} as const

export type Dictionary = (typeof dictionary)[Locale]

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const I18nContext = React.createContext<I18nContextValue | null>(null)

const STORAGE_KEY = "kernelium-locale"

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("en")

  // Restore the saved language (or the browser's) after hydration.
  React.useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "en" || saved === "fr") {
      setLocaleState(saved)
    } else if (navigator.language.toLowerCase().startsWith("fr")) {
      setLocaleState("fr")
    }
  }, [])

  React.useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const value = React.useMemo(
    () => ({ locale, setLocale, t: dictionary[locale] }),
    [locale, setLocale]
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = React.useContext(I18nContext)
  if (!context) throw new Error("useI18n must be used within I18nProvider")
  return context
}

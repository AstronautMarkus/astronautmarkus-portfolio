import React, { createContext, useContext, useState, useEffect } from 'react'
import esTranslations from '../locales/es.json'
import enTranslations from '../locales/en.json'

type Language = 'es' | 'en'

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translations = {
  es: esTranslations,
  en: enTranslations
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  useEffect(() => {
    // Detect language
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    } else {
      const browserLang = navigator.language.toLowerCase()
      if (browserLang.startsWith('es')) {
        setLanguage('es')
      } else {
        setLanguage('en')
      }
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    // Use english if language is not found
    if (!value && language !== 'en') {
      let fallback: any = translations.en
      for (const k of keys) {
        fallback = fallback?.[k]
      }
      value = fallback
    }
    
    return value || key
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

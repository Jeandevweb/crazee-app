import { useCallback, useEffect, useState } from "react"

export type ThemeMode = "light" | "dark"

const STORAGE_KEY = "crazee-theme"

const readStoredTheme = (): ThemeMode => {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === "dark" ? "dark" : "light"
}

const applyTheme = (mode: ThemeMode) => {
  document.documentElement.dataset.theme = mode
}

// À appeler une fois au démarrage (main.tsx) pour appliquer le thème mémorisé
// avant le premier rendu et éviter un flash de couleurs.
export const initThemeMode = () => {
  applyTheme(readStoredTheme())
}

export const useThemeMode = () => {
  const [mode, setMode] = useState<ThemeMode>(readStoredTheme)

  useEffect(() => {
    applyTheme(mode)
    localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  const toggleTheme = useCallback(() => {
    setMode((prev) => (prev === "light" ? "dark" : "light"))
  }, [])

  return { mode, toggleTheme }
}

export const refreshPage = () => window.location.reload()

export const setLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getLocalStorage = (key: string): unknown | null => {
  const item = localStorage.getItem(key)
  if (!item) return null

  try {
    return JSON.parse(item)
  } catch {
    // Stored value is corrupted (manual edit, partial write...) : treat as absent.
    return null
  }
}

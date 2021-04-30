import createPersistedState from 'use-persisted-state'
import { useCallback } from 'react'
const usePersistedState = createPersistedState('app-theme')

export default function useTheme() {
  const [theme, setTheme] = usePersistedState('light')

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme])

  return [
    theme,
    toggleTheme
  ]
}

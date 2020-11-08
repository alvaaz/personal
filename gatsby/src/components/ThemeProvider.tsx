import * as React from 'react'

type ThemeContext = {
  darkMode: boolean
  toggleDarkMode: () => void
}

export const ThemeContext = React.createContext<ThemeContext>({
  darkMode: false,
  toggleDarkMode: () => ({})
})

export const ThemeProvider: React.FC = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState<boolean>(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
  )
}

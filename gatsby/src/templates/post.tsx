import React from 'react'
import { ThemeContext } from '../components/ThemeProvider'
import SEO from '../components/SEO'

export default function SingleArticlePage() {
  const { darkMode, toggleDarkMode } = React.useContext(ThemeContext)
  if (darkMode) {
    React.useEffect(() => {
      toggleDarkMode()
    }, [])
  }
  return (
    <>
      <SEO title="título" />
      <div className="grid gap-x-8 pb-24 px-8 sm:px-16 md:px-24 lg:px-32 xl:px-64 grid-cols-8 sm:grid-cols-12">
        <p className="font-extrabold text-xl uppercase tracking-wider text-red col-start-1 col-end-9 sm:col-end-8">
          Categoría
        </p>
        <h2 className="article__title col-start-1 col-end-7 mb-8">Título</h2>
        <p className="col-start-2 col-end-9 font-medium leading-tight text-3xl mb-16">Expecto</p>
      </div>
    </>
  )
}

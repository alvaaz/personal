import React from 'react'
import Layout from './src/components/Layout'
// const { ThemeProvider } = './src/components/ThemeProvider'
import './src/css/index.css'

// export function wrapRootElement({ element }) {
//   return <ThemeProvider>{element}</ThemeProvider>
// }
export function wrapPageElement({ element }) {
  return <Layout>{element}</Layout>
}

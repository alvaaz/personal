import React from 'react'
import Layout from './src/components/Layout'
import { ThemeProvider } from './src/components/ThemeProvider'
import './src/css/index.css'

export function wrapPageElement({ element }) {
  return <Layout>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return <ThemeProvider>{element}</ThemeProvider>
}

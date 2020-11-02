import React from 'react'
import Layout from './src/components/Layout'
import './src/css/index.css'

export function wrapPageElement({ element }) {
  return <Layout>{element}</Layout>
}

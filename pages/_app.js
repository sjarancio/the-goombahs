import React from 'react'

import { TopNav } from '../components/layout/top-nav'
import { Footer } from '../components/layout/footer'

import {
  layout,
} from '../styles/layout/layout.module.scss'
import { LayoutBG } from '../components/layout/layout-bg'

import '../styles/globals.scss'



function MyApp({ Component, pageProps }) {
  return (
    <div className={layout}>
      <TopNav />
      <Component {...pageProps} />
      <LayoutBG numImgs={4} />
      <Footer />
    </div>
  )
}

export default MyApp

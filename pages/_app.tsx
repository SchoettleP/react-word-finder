/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { AppProps } from 'next/app'
import Topbar from '@components/navigation/topbar/topbar'
import '@styles/global.css'

const App = ({ Component, pageProps }: AppProps) => (
  <div className="flex h-screen overflow-hidden bg-gray-100">
    <div className="flex w-0 flex-1 flex-col overflow-hidden">
      <Topbar />
      <Component {...pageProps} />
    </div>
  </div>
)

export default App

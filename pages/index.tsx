import React from 'react'
import { NextPage } from 'next'

const Home: NextPage = () => {
  const { APP_NAME } = process.env

  return (
    <div>
      <span className="text-2xl">{APP_NAME}</span>
    </div>
  )
}

export default Home

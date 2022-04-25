import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Page = ({ children }: Props) => {
  return <div className="mx-auto flex max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:px-8">{children}</div>
}

export default Page

import Link from 'next/link'
import React from 'react'

const Topbar = () => {
  const { APP_NAME } = process.env

  return (
    <nav className="px-4 bg-white h-16 border-b-2 grid grid-cols-3 w-full items-center">
      <div className="text-left">
        <span>icon</span>
      </div>

      <div className="text-center cursor-pointer">
        <Link href="/" passHref>
          <span className="text-xl">{APP_NAME}</span>
        </Link>
      </div>

      <div className="text-right">
        <span>change theme (coming soon)</span>
      </div>
    </nav>
  )
}
export default Topbar

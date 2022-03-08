import React from 'react'

import TopBar from './AppBar'

export default function ShellLayout({ children }) {
  return (
    <>
      <TopBar />
      <main>{children}</main>
    </>
  )
}

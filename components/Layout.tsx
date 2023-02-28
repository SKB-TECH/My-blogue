import React, { ReactComponentElement } from 'react'
import Header from './Header'

interface child{
    children:React.Component;
}

const Layout = ({ children }: {children:child}) => {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default Layout

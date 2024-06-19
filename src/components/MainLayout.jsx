import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({ childrens }) => {
  return (
    <>
    <Header />
    {childrens}
    <Footer />
    </>
  )
}

export default MainLayout
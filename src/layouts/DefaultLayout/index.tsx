import React from 'react'
import { Header } from '../../components/organism/Header'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'
import { Nav } from '../../components/Nav'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Nav />
      <Outlet />
      <Nav />
    </LayoutContainer>
  )
}
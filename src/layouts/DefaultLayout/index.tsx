import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer } from './styles'
import { Nav } from '../../components/Nav'
import Footer from '../../components/Footer'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Nav />
      <Footer />
    </LayoutContainer>
  )
}

import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'

import { Home } from './pages/Home'
import { Roupas } from './pages/Roupas'
import { Acessorios } from './pages/Acessorios'
import { Itens } from './pages/Itens'
import { About } from './pages/About'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/roupas" element={<Roupas />} />
        <Route path="/acessorios" element={<Acessorios />} />
        <Route path="/itens" element={<Itens />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

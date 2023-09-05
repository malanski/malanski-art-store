import { NavButton, NavContainer } from './styles'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { Books, House, PaintBrush, TShirt } from 'phosphor-react'
import { ReactNode } from 'react'

interface CustomLinkProps {
  children: ReactNode
  to: string
  title: string
}

function CustomLink({ children, to, ...props }: CustomLinkProps) {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Link className={match ? 'active' : ' '} to={to} {...props}>
      {children}
    </Link>
  )
}
export function Nav() {
  return (
    <NavContainer>
      <CustomLink to="/" title="Página Inicial">
        <NavButton>
          <House size={22} weight="fill" />
          <span>Início</span>
        </NavButton>
      </CustomLink>

      <CustomLink to="/roupas" title="Roupas">
        <NavButton>
          <TShirt size={22} weight="fill" />
          <span>Roupas</span>
        </NavButton>
      </CustomLink>

      <CustomLink to="/acessorios" title="Acessórios">
        <NavButton>
          <PaintBrush size={22} weight="fill" />
          <span>Acessórios</span>
        </NavButton>
      </CustomLink>

      <CustomLink to="/itens" title="Itens">
        <NavButton>
          <Books size={22} weight="fill" />
          <span>Itens</span>
        </NavButton>
      </CustomLink>
    </NavContainer>
  )
}

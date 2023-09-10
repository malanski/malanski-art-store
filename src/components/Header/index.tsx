import { HeaderContainer } from './styles'
import logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <a href="/about">
        <img
          src={logo}
          alt="Malanski art store app Logo"
          title="Sobre a Malanski Art Store"
        ></img>
      </a>
    </HeaderContainer>
  )
}

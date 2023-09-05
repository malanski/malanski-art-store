import { HeaderContainer } from './styles'
import logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={logo}
        alt="Malanski art store app Logo"
        title="Malanski Art Store"
      ></img>
    </HeaderContainer>
  )
}

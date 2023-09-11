import { HeaderContainer } from './styles'
import logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/about" title="Sobre a Malanski Art Store">
        <img src={logo} alt="Malanski art store app Logo"></img>
      </Link>
    </HeaderContainer>
  )
}

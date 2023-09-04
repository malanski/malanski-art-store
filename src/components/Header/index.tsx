import { HeaderContainer } from "./styles";
import logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img 
        src={logo} 
        alt="Coffee Delivery app Logo"
        title="Coffee Delivery app"></img>
    </HeaderContainer>
  )
}
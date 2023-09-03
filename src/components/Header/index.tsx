import { CartButton, HeaderContainer, OfficialStore, UserActions } from "./styles";

import logo from '../../assets/Logo.svg'
import { ShoppingBag, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img 
        src={logo} 
        alt="Coffee Delivery app Logo"
        title="Coffee Delivery app"></img>

      <UserActions>
        <OfficialStore title="Loja oficial">
          <ShoppingBag size={22} weight="fill"/>
          <span>Veja a Loja principal na Colab 55</span>
        </OfficialStore>

        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>

      </UserActions>
    </HeaderContainer>
  )
}
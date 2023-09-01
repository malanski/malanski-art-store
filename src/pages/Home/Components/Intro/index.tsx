import { Badges, CartIcon, IconBadge, IntroContainer, IntroTitles } from "./styles"
import { ShoppingCart } from 'phosphor-react';
import Coffee from '../../../../assets/Imagem.png'
export function Intro() {
  return (
    <IntroContainer>

      <div>
        <IntroTitles>
          <h2>
            Encontre o café perfeito<br></br>
            para qualquer hora do dia
          </h2>
          <h4>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
          </h4>
        </IntroTitles>

        <Badges>
          <IconBadge>
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Compra simples e segura</span>
          </IconBadge>
          <IconBadge>
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Embalagem mantém o café intacto</span>
          </IconBadge>
          <IconBadge>
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>Entrega rápida e rastreada</span>
          </IconBadge>
          <IconBadge>
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <span>O café chega fresquinho até você</span>
          </IconBadge>
        </Badges>
      </div>

      <img 
        src={Coffee} 
        alt="Coffee Delivery app Logo"
        title="Coffee Delivery app"></img>
        

      


    </IntroContainer>
  )
}
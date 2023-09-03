import { Badges, IconBadge, IntroContainer, IntroTitles, TitlesContainer } from "./styles"
import { Package, ShoppingCart, Timer, HandbagSimple } from 'phosphor-react';
import ProductImg from '../../../../assets/Imagem.png'
import { useTheme } from 'styled-components'; 

export function Intro() {
  const theme = useTheme()

  return (
    <IntroContainer>
      <TitlesContainer>
        <IntroTitles>
          <h2>
            Encontre o design perfeito<br></br>
            para qualquer hora do dia
          </h2>
          <h4>
            Aqui na Malanski Art Store você recebe seu pedido onde estiver e tem atendimento personalizado
          </h4>
        </IntroTitles>

        <Badges>
          <IconBadge background={theme.product['yellow-dark']}>
            <ShoppingCart size={16} weight="fill" />
            <span>Compra simples e segura</span>
          </IconBadge>
          <IconBadge background={theme.base['base-text']}>
            <Package size={16} weight="fill" />
            <span>Embalagem mantém adequada</span>
          </IconBadge>
          <IconBadge background={theme.product['yellow']}>
            <Timer size={16} weight="fill" />
            <span>Entrega rápida e rastreada</span>
          </IconBadge>
          <IconBadge background={theme.product['purple']}>
            <HandbagSimple size={16} weight="fill" />
            <span>O produto chega até você</span>
          </IconBadge>
        </Badges>
      </TitlesContainer>

      <img
        src={ProductImg}
        alt="Coffee Delivery app Logo"
        title="Coffee Delivery app">
      </img>
    </IntroContainer>
  )
}
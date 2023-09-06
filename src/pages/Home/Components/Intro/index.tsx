import {
  Badges,
  IconBadge,
  IntroContainer,
  IntroTitles,
  TitlesContainer,
} from './styles'
import { Package, ShoppingCart, Timer, HandbagSimple } from 'phosphor-react'
import ProductImg from '../../../../assets/Imagem.png'
import { useTheme } from 'styled-components'

export function Intro() {
  const theme = useTheme()

  return (
    <IntroContainer>
      <TitlesContainer>
        <IntroTitles>
          <h1>Veja aqui uma seleção que criamos para você</h1>
          <h4>
            Aqui na Malanski Art Store você recebe seu pedido com tranquilidade
            e também tem atendimento personalizado
          </h4>
        </IntroTitles>

        <Badges>
          <div>
            <IconBadge background={theme.product['yellow-dark']}>
              <ShoppingCart size={16} weight="fill" />
              <span>Compra simples e segura feita pela Colab55</span>
            </IconBadge>
            <IconBadge background={theme.base['base-text']}>
              <Package size={16} weight="fill" />
              <span>Embalagem adequada</span>
            </IconBadge>
          </div>
          <div>
            <IconBadge background={theme.product.yellow}>
              <Timer size={16} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </IconBadge>
            <IconBadge background={theme.product.purple}>
              <HandbagSimple size={16} weight="fill" />
              <span>O produto chega até você</span>
            </IconBadge>
          </div>
        </Badges>
      </TitlesContainer>

      <img
        src={ProductImg}
        alt="Crisântemo e exaramo Logo"
        title="Artes únicas, feitas com amor"
      ></img>
    </IntroContainer>
  )
}

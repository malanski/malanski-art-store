import {
  Badges,
  IconBadge,
  IntroContainer,
  IntroTitles,
  TitlesContainer,
} from './styles'
import { Package, ShoppingCart, Timer, HandbagSimple } from 'phosphor-react'
import ProductImg from '../../../../assets/Imagem.png'
import ProductImg2 from '../../../../assets/Imagem2.png'
import ProductImg3 from '../../../../assets/Imagem3.png'
import { useTheme } from 'styled-components'
import { useState } from 'react'

export function Intro() {
  const theme = useTheme()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [ProductImg, ProductImg2, ProductImg3]

  function changeImage() {
    // Verifique se estamos na última imagem e, se sim, volte para a primeira
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0)
    } else {
      // Caso contrário, vá para a próxima imagem
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

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
              <span>Compra simples e segura feita pela Colab 55</span>
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
        src={images[currentImageIndex]}
        onClick={changeImage}
        alt="Desenho de um crisântemo sobre hexagrama"
        title="Artes únicas, feitas com amor"
      />
    </IntroContainer>
  )
}

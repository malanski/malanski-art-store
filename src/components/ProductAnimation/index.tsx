import { useState } from 'react'
import { ImageCarrousel } from './styles'
import { ArrowLeft, ArrowRight } from 'phosphor-react'

interface ProductAnimationProps {
  images: string[]
}

function ProductAnimation({ images }: ProductAnimationProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  function changeImage(direction: 'left' | 'right') {
    if (direction === 'left') {
      // Voltar para a imagem anterior
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1,
      )
    } else if (direction === 'right') {
      // Avançar para a próxima imagem
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      )
    }
  }

  return (
    <>
      <ImageCarrousel>
        <button onClick={() => changeImage('left')}>
          <ArrowLeft />
        </button>
        <img
          src={images[currentImageIndex]}
          // onClick={() => changeImage('right')}
          alt="Descrição da imagem"
          title="Estampas @malanskiart"
        />
        <button onClick={() => changeImage('right')}>
          <ArrowRight />
        </button>
      </ImageCarrousel>
    </>
  )
}

export default ProductAnimation

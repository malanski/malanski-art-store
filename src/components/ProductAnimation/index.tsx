import { useState } from 'react'

interface ProductAnimationProps {
  images: string[]
}

function ProductAnimation({ images }: ProductAnimationProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  function changeImage() {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0)
    } else {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  return (
    <>
      <img
        src={images[currentImageIndex]}
        onClick={changeImage}
        alt="Descrição da imagem"
        title="Título da imagem"
      />
    </>
  )
}

export default ProductAnimation

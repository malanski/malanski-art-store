import { useTheme } from 'styled-components'
import {
  BuyActions,
  BuyButton,
  Modal,
  ModalFlex,
  ModalInfo,
  OptionsStyle,
  ProductCardStyle,
  ProductInfo,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { useEffect, useState } from 'react'

export interface IProductData {
  data: {
    name: string
    description: string
    options: string[]
    iconSrc: string
    imgSrc: string
    price: number
    buyLink: string
  }
}

export function ProductCard(props: IProductData) {
  const theme = useTheme()
  const { name, description, options, iconSrc, price, buyLink } = props.data
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<
    IProductData['data'] | null
  >(null)

  useEffect(() => {
    document.body.className = isModalOpen ? 'modal-open' : ''
  }, [isModalOpen])

  const openModal = (productData: IProductData['data']) => {
    setSelectedProduct(productData)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedProduct(null)
    setIsModalOpen(false)
  }

  return (
    <ProductCardStyle>
      <img
        src={`${iconSrc}`}
        alt={name}
        onClick={() => openModal(props.data)}
      />

      <ProductInfo>
        <OptionsStyle>
          {options.map((option, index) => (
            <button key={index}>{option}</button>
          ))}
        </OptionsStyle>

        <h3>{name}</h3>
        <p>{description}</p>
      </ProductInfo>

      <BuyActions>
        <h6 title="Preço atual">
          R$ <span>{price}</span>
        </h6>

        <BuyButton title="Comprar" background={theme.product['purple-dark']}>
          <a href={buyLink} target="_blanc" rel="noopener noreferrer">
            <ShoppingCart size={22} weight="fill" />
          </a>
        </BuyButton>
      </BuyActions>

      {isModalOpen && selectedProduct && (
        <Modal onClick={closeModal}>
          <ModalFlex>
            <img src={selectedProduct.imgSrc} alt="Imagem Grande" />
            <ModalInfo>
              <h3>{selectedProduct.name}</h3>
              <hr />
              <h5>{selectedProduct.description}</h5>
              <BuyActions>
                <h6 title="Preço atual">
                  R$ <span>{selectedProduct.price}</span>
                </h6>

                <BuyButton
                  title="Comprar"
                  background={theme.product['purple-dark']}
                >
                  <a
                    href={selectedProduct.buyLink}
                    target="_blanc"
                    rel="noopener noreferrer"
                  >
                    <ShoppingCart size={22} weight="fill" />
                  </a>
                </BuyButton>
              </BuyActions>
            </ModalInfo>
            <button onClick={closeModal}>Fechar</button>
          </ModalFlex>
        </Modal>
      )}
    </ProductCardStyle>
  )
}

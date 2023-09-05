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
  }
}

export function ProductCard(props: IProductData) {
  const theme = useTheme()
  const { name, description, options, iconSrc, imgSrc, price } = props.data

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [largeImageSrc, setLargeImageSrc] = useState('')
  const [modalName, setModalName] = useState('')
  const [modalDetails, setModalDetails] = useState('')
  const [modalPrice, setModalPrice] = useState(Number)
  const [bodyClass, setBodyClass] = useState('')

  useEffect(() => {
    document.body.className = bodyClass
  }, [bodyClass])

  return (
    <ProductCardStyle>
      <img
        src={`${iconSrc}`}
        alt={name}
        onClick={() => {
          setLargeImageSrc(imgSrc)
          setModalName(name)
          setModalDetails(description)
          setModalPrice(price)
          setIsModalOpen(true)
          setBodyClass('modal-open')
        }}
      ></img>

      <ProductInfo>
        <OptionsStyle>
          {options.map((option, index) => (
            <button key={index}>{option}</button>
          ))}
        </OptionsStyle>

        <h3>{name}</h3>
        <h4>{description}</h4>
      </ProductInfo>

      <BuyActions>
        <h6 title="Preço atual">
          R$ <span>{price}</span>
        </h6>

        <BuyButton title="Comprar" background={theme.product['purple-dark']}>
          <a>
            <ShoppingCart size={22} weight="fill" />
          </a>
        </BuyButton>
      </BuyActions>

      {isModalOpen && (
        <Modal
          onClick={() => {
            // setIsModalOpen(true)
            setBodyClass('')
          }}
        >
          <ModalFlex>
            <img src={largeImageSrc} alt="Imagem Grande" />
            <ModalInfo>
              <h3>{modalName}</h3>
              <hr></hr>
              <h5>{modalDetails}</h5>
              <BuyActions>
                <h6 title="Preço atual">
                  R$ <span>{modalPrice}</span>
                </h6>

                <BuyButton
                  title="Comprar"
                  background={theme.product['purple-dark']}
                >
                  <a>
                    <ShoppingCart size={22} weight="fill" />
                  </a>
                </BuyButton>
              </BuyActions>
            </ModalInfo>
            <button onClick={() => setIsModalOpen(false)}>Fechar</button>
          </ModalFlex>
        </Modal>
      )}
    </ProductCardStyle>
  )
}

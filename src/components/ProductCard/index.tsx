import { useTheme } from 'styled-components'
import {
  BuyActions,
  BuyButton,
  CardCloseButton,
  CardHeader,
  CardImage,
  LearnAbout,
  LearnMore,
  Modal,
  ModalFlex,
  ModalHeader,
  ModalInfo,
  OptionsStyle,
  ProductCardStyle,
  ProductInfo,
} from './styles'
import { Plus, ShoppingCart, XCircle } from 'phosphor-react'
import { useEffect, useState } from 'react'

export interface IProductData {
  data: {
    name: string
    description: string
    options: string[]
    iconSrc: string
    imgSrc: string[]
    price: number
    buyLink: string
  }
}

export function ProductCard(props: IProductData) {
  const theme = useTheme()
  const { name, description, options, iconSrc, price, buyLink } = props.data
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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

  function changeImage() {
    if (currentImageIndex === props.data.imgSrc.length - 1) {
      setCurrentImageIndex(0)
    } else {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  return (
    <ProductCardStyle>
      <div onClick={() => openModal(props.data)}>
        <CardHeader>
          <CardImage
            src={`${iconSrc}`}
            alt={name}
            title={`Click e saiba mais sobre ${name}`}
          />
          <LearnMore title="Click e saiba mais">
            <span>
              <Plus size={24} />
              Saiba Mais
            </span>
          </LearnMore>
        </CardHeader>
        <LearnAbout
          onClick={() => openModal(props.data)}
          title="Click e saiba mais"
        >
          <Plus size={24} />
          Saiba Mais
        </LearnAbout>

        <ProductInfo>
          <OptionsStyle>
            {options.map((option, index) => (
              <div key={index}>{option}</div>
            ))}
          </OptionsStyle>
          <h3>{name}</h3>
          <p>{description}</p>
        </ProductInfo>
        <BuyActions>
          <div title="Preço atual">
            <p>R$ {price.toFixed(2).toString().replace('.', ',')}</p>
          </div>
          <BuyButton
            title="Comprar direto na Colab 55 @malanskiart"
            background={theme.product['purple-dark']}
          >
            <a href={buyLink} target="_blanc" rel="noopener noreferrer">
              <ShoppingCart size={22} weight="fill" />
            </a>
          </BuyButton>
        </BuyActions>
      </div>

      {isModalOpen && selectedProduct && (
        <Modal>
          <ModalFlex>
            <ModalHeader>
              <img
                title="Trocar Imagem"
                src={props.data.imgSrc[currentImageIndex]}
                alt={selectedProduct.name}
                onClick={changeImage}
              ></img>
              <div>
                {/* <ArrowClockwise /> */}
                <span>Clique na imagem para ver mais</span>
              </div>
            </ModalHeader>

            <ModalInfo>
              <h3>{selectedProduct.name}</h3>
              <hr />
              <p>{selectedProduct.description}</p>
              <h5>Modelos:</h5>
              <OptionsStyle>
                {selectedProduct.options.map((option, index) => (
                  <div key={index}>{option}</div>
                ))}
              </OptionsStyle>

              <BuyActions>
                <div title="Preço atual">
                  <p>R$ {price.toFixed(2).toString().replace('.', ',')}</p>
                </div>

                <BuyButton
                  title="Comprar direto na Colab 55  @malanskiart"
                  background={theme.product['purple-dark']}
                >
                  <a
                    href={selectedProduct.buyLink}
                    target="_blanc"
                    rel="noopener noreferrer"
                  >
                    <ShoppingCart size={22} weight="fill" />
                    <span>Comprar</span>
                  </a>
                </BuyButton>
              </BuyActions>
            </ModalInfo>
            <CardCloseButton onClick={closeModal} title="Fechar">
              <XCircle />
            </CardCloseButton>
          </ModalFlex>
        </Modal>
      )}
    </ProductCardStyle>
  )
}

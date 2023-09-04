import {
  BuyActions,
  BuyButton,
  OptionsStyle,
  ProductCard,
  ProductInfo,
  ProductListContainer,
  ProductsListStyles,
  ProductsNav,
  Modal,
  ModalInfo
} from "./style"
import { ShoppingCart } from "phosphor-react"
import { useTheme } from 'styled-components'
import { useEffect, useState } from 'react'

import FlipflopsDataList from "../../../../data/FlipflopsData"
import MugsDataList from "../../../../data/MugsData"
import ApronsDataList from "../../../../data/ApronsData"
import CapsDataList from '../../../../data/CapsData'
import TshirtsDataList from '../../../../data/TshirtsData'
import FullTshirtsDataList from '../../../../data/FullShirtsData'
import SweatShirtsDataList from '../../../../data/SweatShirtsData'
import LeggingsDataList from '../../../../data/LeggingsData'
import SketchbookDataList from "../../../../data/SketchbookData"
import TowelsDataList from "../../../../data/TowelsData"
import PillowsDataList from "../../../../data/PillowsData"
import ButtonsDataList from "../../../../data/ButtonsData"
import { Nav } from "../../../../components/Nav"


const allData = [
  ...TshirtsDataList,
  ...CapsDataList,
  ...FullTshirtsDataList,
  ...ButtonsDataList,
  ...MugsDataList,
  ...LeggingsDataList,
  ...PillowsDataList,
  ...FlipflopsDataList,
  ...TowelsDataList,
  ...SweatShirtsDataList,
  ...SketchbookDataList,
  ...ApronsDataList
];

export function ProductsList() {
  const theme = useTheme()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [largeImageSrc, setLargeImageSrc] = useState('')
  const [modalName, setModalName] = useState('')
  const [modalDetails, setModalDetails] = useState('')
  const [modalPrice, setModalPrice] = useState(Number)
  const [bodyClass, setBodyClass] = useState('')
  useEffect(() => {
    // Atualize a classe do body com base no estado do modal
    document.body.className = bodyClass
  }, [bodyClass])

  return (
    <ProductsListStyles>
      <Nav/>
      <h2>
        Todos os Produtos
      </h2>
      <ProductListContainer>
        {allData.map((product, index) => (
          <ProductCard key={index}>
            <img
              src={`${product.iconSrc}`}
              alt={product.name}
              onClick={() => {
                setLargeImageSrc(product.imgSrc)
                setModalName(product.name)
                setModalDetails(product.description)
                setModalPrice(product.price)
                setIsModalOpen(true)
                setBodyClass('modal-open')
              }}
            ></img>
            <ProductInfo>
              <OptionsStyle>
                {product.options.map((option, index) => (
                  <button key={index}>{option}</button>
                ))}
              </OptionsStyle>

              <h3>{product.name}</h3>
              <h4>{product.description}</h4>
            </ProductInfo>

            <BuyActions>
              <h6 title="Preço atual">
                R$ <span>{product.price}</span>
              </h6>

              <BuyButton
                title="Comprar"
                background={theme.product['purple-dark']}>
                <button>
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </BuyButton>
            </BuyActions>
          </ProductCard>
        ))}
      </ProductListContainer>

      {isModalOpen && (
        <Modal onClick={() => {
          setIsModalOpen(false)
          setBodyClass('')
        }}>
          <img src={largeImageSrc} alt="Imagem Grande" />
          <ModalInfo>
            <h3>{modalName}</h3>
            <h4>{modalDetails}</h4>
            <h4>{modalPrice}</h4>
            <a href="" title="Comprar">Comprar</a>
          </ModalInfo>
          <button onClick={() => setIsModalOpen(false) }>Fechar</button>
        </Modal>
      )}
    </ProductsListStyles>
  )
}

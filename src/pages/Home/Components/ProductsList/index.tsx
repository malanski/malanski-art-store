import {
  BuyActions,
  BuyButton,
  OptionsStyle,
  ProductCard,
  ProductInfo,
  ProductListContainer,
  ProductsListStyles,
  Modal,
  ModalInfo,
  ModalFlex
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
    document.body.className = bodyClass
  }, [bodyClass])

  return (
    <ProductsListStyles>
      <Nav />
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
                <a>
                  <ShoppingCart size={22} weight="fill" />
                </a>
              </BuyButton>
            </BuyActions>
          </ProductCard>
        ))}
      </ProductListContainer>

      {isModalOpen && (
        <Modal onClick={() => {
          // setIsModalOpen(true)
          setBodyClass('')
        }}>
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
                  background={theme.product['purple-dark']}>
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
    </ProductsListStyles>
  )
}

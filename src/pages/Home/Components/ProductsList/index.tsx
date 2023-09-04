import {
  BuyActions,
  BuyButton,
  OptionsStyle,
  ProductCard,
  ProductInfo,
  ProductListContainer,
  ProductsListStyles,
  ProductsNav
} from "./style"
import { ShoppingCart } from "phosphor-react"
import { useTheme } from 'styled-components'

import FlipflopsDataList from "../../../../data/FlipflopsData"
import MugsDataList from "../../../../data/MugsData"
import ApronsDataList from "../../../../data/ApronsData"
import CapsDataList from '../../../../data/CapsData'
import TshirtsDataList from '../../../../data/TshirtsData'
import FullTshirtsDataList from '../../../../data/FullShirtsData'
import SweatShirtsDataList from '../../../../data/SweatShirtsData'
import LeggingsDataList from '../../../../data/LeggingsData'
import SketchbookDataList from "../../../../data/SketchbookData"

const allData = [
  ...TshirtsDataList,
  ...CapsDataList,
  ...FullTshirtsDataList,
  ...MugsDataList,
  ...FlipflopsDataList,
  ...LeggingsDataList,
  ...SweatShirtsDataList,
  ...SketchbookDataList,
  ...ApronsDataList
];

export function ProductsList() {
  const theme = useTheme()

  return (
    <ProductsListStyles>
      <h2>
        Todos os Produtos
      </h2>
      <ProductsNav>
      </ProductsNav>
      <ProductListContainer>
        {allData.map((product, index) => (
          <ProductCard key={index}>
            <img src={`${product.iconSrc}`}></img>

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
    </ProductsListStyles>
  )
}
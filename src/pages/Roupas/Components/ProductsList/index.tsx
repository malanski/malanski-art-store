import { BuyActions, BuyButton, OptionsStyle, ProductCard, ProductInfo, ProductListContainer, ProductsListStyles, ProductsNav } from "./style"
import TshirtsDataList from '../../../../data/TshirtsData'
import FullTshirtsDataList from '../../../../data/FullShirtsData'
import SweatShirtsDataList from '../../../../data/SweatShirtsData'
import { ShoppingCart } from "phosphor-react"
import { useTheme } from 'styled-components'
import { SetStateAction, useState } from 'react'
import LeggingsDataList from "../../../../data/LeggingsData"

const allData = [
  ...TshirtsDataList,
  ...FullTshirtsDataList,
  ...LeggingsDataList,
  ...SweatShirtsDataList,
];

const dataSources = [
  { name: 'Roupas', data: allData },
  { name: 'Camisetas', data: TshirtsDataList },
  { name: 'Full Prints', data: FullTshirtsDataList },
  { name: 'Leggings', data: LeggingsDataList },
  { name: 'Moletons', data: SweatShirtsDataList }
  ];

export function ProductsList() {
  const theme = useTheme()
  const [activeDataIndex, setActiveDataIndex] = useState(0);

  const toggleDataSource = (index: SetStateAction<number>) => {
    setActiveDataIndex(index);
  };

  const currentDataSource = dataSources[activeDataIndex];

  return (
    <ProductsListStyles>
            <h2>
              {currentDataSource.name}
            </h2>
      <ProductsNav>
          {dataSources.map((source, index) => (
            <li key={index}>
              <a title={`Mudar para ${source.name}`} onClick={() => toggleDataSource(index)}>{source.name}</a>
            </li>
          ))}
      </ProductsNav>
      <ProductListContainer>
        {currentDataSource.data.map((product, index) => (
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

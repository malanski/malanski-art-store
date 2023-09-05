import {
  ProductListContainer,
  ProductsListStyles,
  ProductsNav,
} from '../../../../styles/pages'
import TshirtsDataList from '../../../../data/TshirtsData'
import FullTshirtsDataList from '../../../../data/FullShirtsData'
import SweatShirtsDataList from '../../../../data/SweatShirtsData'
import { SetStateAction, useState } from 'react'
import LeggingsDataList from '../../../../data/LeggingsData'
import { Nav } from '../../../../components/Nav'
import { ProductCard } from '../../../../components/ProductCard'

const allData = [
  ...TshirtsDataList,
  ...FullTshirtsDataList,
  ...LeggingsDataList,
  ...SweatShirtsDataList,
]

const dataSources = [
  { name: 'Roupas', data: allData },
  { name: 'Camisetas', data: TshirtsDataList },
  { name: 'Full Prints', data: FullTshirtsDataList },
  { name: 'Leggings', data: LeggingsDataList },
  { name: 'Moletons', data: SweatShirtsDataList },
]

export function ProductsList() {
  const [activeDataIndex, setActiveDataIndex] = useState(0)

  const toggleDataSource = (index: SetStateAction<number>) => {
    setActiveDataIndex(index)
  }

  const currentDataSource = dataSources[activeDataIndex]

  return (
    <ProductsListStyles>
      <Nav />
      <h2>{currentDataSource.name}</h2>
      <ProductsNav>
        {dataSources.map((source, index) => (
          <li key={index}>
            <a
              title={`Mudar para ${source.name}`}
              onClick={() => toggleDataSource(index)}
            >
              {source.name}
            </a>
          </li>
        ))}
      </ProductsNav>
      <ProductListContainer>
        {currentDataSource.data.map((product, index) => (
          <ProductCard data={product} key={index}></ProductCard>
        ))}
      </ProductListContainer>
    </ProductsListStyles>
  )
}

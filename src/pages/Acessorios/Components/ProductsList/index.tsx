import {
  ProductListContainer,
  ProductsListStyles,
  ProductsNav,
} from '../../../../styles/pages'
import CapsDataList from '../../../../data/CapsData'
import FlipflopsDataList from '../../../../data/FlipflopsData'
import { SetStateAction, useState } from 'react'
import TowelsDataList from '../../../../data/TowelsData'
import ButtonsDataList from '../../../../data/ButtonsData'
import { Nav } from '../../../../components/Nav'
import { ProductCard } from '../../../../components/ProductCard'

const allData = [
  ...CapsDataList,
  ...ButtonsDataList,
  ...TowelsDataList,
  ...FlipflopsDataList,
]

const dataSources = [
  { name: 'Acessórios', data: allData },
  { name: 'Bonés', data: CapsDataList },
  { name: 'Broches', data: ButtonsDataList },
  { name: 'Toalhas', data: TowelsDataList },
  { name: 'Chinelos', data: FlipflopsDataList },
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
      <h4>Categorias</h4>

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
          <ProductCard data={product} key={index} />
        ))}
      </ProductListContainer>
    </ProductsListStyles>
  )
}

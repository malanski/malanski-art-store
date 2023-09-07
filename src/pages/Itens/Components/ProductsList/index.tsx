import {
  ProductListContainer,
  ProductsListStyles,
  ProductsNav,
} from '../../../../styles/pages'
import { SetStateAction, useState } from 'react'
import MugsDataList from '../../../../data/MugsData'
import ApronsDataList from '../../../../data/ApronsData'
import SketchbookDataList from '../../../../data/SketchbookData'
import PillowsDataList from '../../../../data/PillowsData'
import { Nav } from '../../../../components/Nav'
import { ProductCard } from '../../../../components/ProductCard'
import TotebagsList from '../../../../data/TotebagsData'

const allData = [
  ...MugsDataList,
  ...TotebagsList,
  ...SketchbookDataList,
  ...PillowsDataList,
  ...ApronsDataList,
]

const dataSources = [
  { name: 'Itens', data: allData },
  { name: 'Canecas', data: MugsDataList },
  { name: 'Bolsas', data: TotebagsList },
  { name: 'Cadernos', data: SketchbookDataList },
  { name: 'Almofadas', data: PillowsDataList },
  { name: 'Aventais', data: ApronsDataList },
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
          <ProductCard data={product} key={index} />
        ))}
      </ProductListContainer>
    </ProductsListStyles>
  )
}

import {
  ProductListContainer,
  ProductsListStyles,
} from '../../../../styles/pages'

import FlipflopsDataList from '../../../../data/FlipflopsData'
import MugsDataList from '../../../../data/MugsData'
import ApronsDataList from '../../../../data/ApronsData'
import CapsDataList from '../../../../data/CapsData'
import TshirtsDataList from '../../../../data/TshirtsData'
import FullTshirtsDataList from '../../../../data/FullShirtsData'
import SweatShirtsDataList from '../../../../data/SweatShirtsData'
import LeggingsDataList from '../../../../data/LeggingsData'
import SketchbookDataList from '../../../../data/SketchbookData'
import TowelsDataList from '../../../../data/TowelsData'
import PillowsDataList from '../../../../data/PillowsData'
import ButtonsDataList from '../../../../data/ButtonsData'
import { Nav } from '../../../../components/Nav'
import TotebagsList from '../../../../data/TotebagsData'

import { ProductCard } from '../../../../components/ProductCard'

const allData = [
  ...TshirtsDataList,
  ...CapsDataList,
  ...FullTshirtsDataList,
  ...ButtonsDataList,
  ...TotebagsList,
  ...MugsDataList,
  ...LeggingsDataList,
  ...PillowsDataList,
  ...FlipflopsDataList,
  ...TowelsDataList,
  ...SweatShirtsDataList,
  ...SketchbookDataList,
  ...ApronsDataList,
]

export function ProductsList() {
  return (
    <ProductsListStyles>
      <Nav />
      <h2>Todos os Produtos</h2>
      <ProductListContainer>
        {allData.map((product, index) => (
          <ProductCard data={product} key={index} />
        ))}
      </ProductListContainer>
    </ProductsListStyles>
  )
}

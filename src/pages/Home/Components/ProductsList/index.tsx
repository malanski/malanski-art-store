import { useState } from 'react'
import {
  ProductListContainer,
  ProductListPagination,
  ProductsListStyles,
} from '../../../../styles/pages'
import { Nav } from '../../../../components/Nav'
import { ProductCard } from '../../../../components/ProductCard'

import FlipflopsDataList from '../../../../data/FlipflopsData'
import MugsDataList from '../../../../data/MugsData'
import ApronsDataList from '../../../../data/ApronsData'
import ButtonsDataList from '../../../../data/ButtonsData'
import CapsDataList from '../../../../data/CapsData'
import FullTshirtsDataList from '../../../../data/FullShirtsData'
import LeggingsDataList from '../../../../data/LeggingsData'
import PillowsDataList from '../../../../data/PillowsData'
import SketchbookDataList from '../../../../data/SketchbookData'
import SweatShirtsDataList from '../../../../data/SweatShirtsData'
import TotebagsList from '../../../../data/TotebagsData'
import TowelsDataList from '../../../../data/TowelsData'
import TshirtsDataList from '../../../../data/TshirtsData'

const allData = [
  ...FullTshirtsDataList,
  ...TshirtsDataList,
  ...CapsDataList,
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

const productsPerPage = 20

export function ProductsList() {
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = allData.slice(indexOfFirstProduct, indexOfLastProduct)

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementRect = element.getBoundingClientRect()
      const elementY = window.scrollY + elementRect.top
      const scrollY = elementY - window.innerHeight / 1.5
      window.scrollBy({ top: scrollY, behavior: 'smooth' })
    }
  }

  return (
    <ProductsListStyles>
      <Nav />
      <h2>Todos os Produtos</h2>

      <ProductListPagination id="productList">
        <h5>Páginas</h5>
        <ul>
          {Array(Math.ceil(allData.length / productsPerPage))
            .fill(0)
            .map((_, index) => (
              <li
                key={index}
                onClick={() => {
                  setCurrentPage(index + 1)
                  scrollToElement('productList') // Chama a função para rolar até o elemento com o ID "productList"
                }}
                className={`page-item ${
                  index + 1 === currentPage ? 'active' : ''
                }`}
              >
                <a href="#" title={`Página ${index + 1}`}>
                  {index + 1}
                </a>
              </li>
            ))}
        </ul>
      </ProductListPagination>

      <ProductListContainer>
        {currentProducts.map((product, index) => (
          <ProductCard data={product} key={index} />
        ))}
      </ProductListContainer>
    </ProductsListStyles>
  )
}

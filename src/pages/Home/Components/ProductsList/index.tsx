import { useState } from 'react'
import {
  ProductListContainer,
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
import ProductPagination from '../../../../components/ProductPagination'

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

      {/* Paginação superior */}
      <ProductPagination
        currentPage={currentPage}
        totalPages={Math.ceil(allData.length / productsPerPage)}
        onPageChange={(page) => {
          setCurrentPage(page)
          scrollToElement('productList')
        }}
      />

      <ProductListContainer>
        {currentProducts.map((product, index) => (
          <ProductCard data={product} key={index} />
        ))}
      </ProductListContainer>

      {/* Paginação inferior */}
      <ProductPagination
        currentPage={currentPage}
        totalPages={Math.ceil(allData.length / productsPerPage)}
        onPageChange={(page) => {
          setCurrentPage(page)
          scrollToElement('productList')
        }}
      />
    </ProductsListStyles>
  )
}

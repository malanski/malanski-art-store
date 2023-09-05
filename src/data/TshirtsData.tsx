import teeRedDragon from '../assets/products_icon/tee_red_dragon.png'
import teeOctoInv from '../assets/products_icon/tee_octo_inv.png'
import teeRoseSing from '../assets/products_icon/tee_rose_sing.png'
import teeKoiFishFlowers from '../assets/products_icon/tee_koi_fish_flowers.png'

import teeRedDragonBig from '../assets/products_img/tee_red_dragon.png'
import teeOctoInvBig from '../assets/products_img/tee_octo_inv.png'
import teeRoseSingBig from '../assets/products_img/tee_rose_sing.png'
import teeKoiFishFlowersBig from '../assets/products_img/tee_koi_fish_flowers.png'

interface ITshirtsData {
  name: string
  description: string
  options: string[]
  iconSrc: string
  imgSrc: string
  buyHref: string
  price: number
}
const TshirtsDataList: ITshirtsData[] = [
  {
    name: 'Camiseta Dragão Vermelho',
    description: 'Disponível em varias cores e tamanhos',
    options: ['Regular', 'Baby Long', 'Infantil'],
    iconSrc: teeRedDragon,
    imgSrc: teeRedDragonBig,
    price: 119.99,
    buyHref: 'https://www.colab55.com/@malanskiart/tees/dragao-vermelho',
  },
  {
    name: 'Camiseta crisântemo octógama',
    description: 'Disponível em varias cores e tamanhos',
    options: ['Regular', 'Baby Long', 'Infantil'],
    iconSrc: teeOctoInv,
    imgSrc: teeOctoInvBig,
    price: 119.99,
    buyHref:
      'https://www.colab55.com/@malanskiart/tees/crisantemo-octograma-estrela-invertido',
  },
  {
    name: 'Peixes Koi Carpas Flores',
    description: 'Disponível em varias cores e tamanhos',
    options: ['Regular', 'Baby Long', 'Infantil'],
    iconSrc: teeKoiFishFlowers,
    imgSrc: teeKoiFishFlowersBig,
    price: 119.99,
    buyHref:
      'https://www.colab55.com/@malanskiart/tees/peixes-koi-carpas-flores',
  },
  {
    name: 'Camiseta Rosa Singular',
    description: 'Disponível em varias cores e tamanhos',
    options: ['Regular', 'Baby Long', 'Infantil'],
    iconSrc: teeRoseSing,
    imgSrc: teeRoseSingBig,
    price: 119.99,
    buyHref: 'https://www.colab55.com/@malanskiart/tees/rosa-singular',
  },
]

export default TshirtsDataList

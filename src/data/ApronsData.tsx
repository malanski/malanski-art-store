import ApronsMandalaRed from '../assets/products_icon/aprons_koi_fishes.png'
import ApronsSunflower from '../assets/products_icon/aprons_big_rose.png'
import ApronsTurtleOrange from '../assets/products_icon/aprons_lion_red.png'
import ApronsRedWings from '../assets/products_icon/aprons_dragon_blue.png'

import ApronsMandalaRedBig from '../assets/products_img/aprons_koi_fishes.png'
import ApronsSunflowerBig from '../assets/products_img/aprons_big_rose.png'
import ApronsTurtleOrangeBig from '../assets/products_img/aprons_lion_red.png'
import ApronsRedWingsBig from '../assets/products_img/aprons_dragon_blue.png'

const ItemDescription =
  'Brim 100% algodão , Bolso frontal arredondado, faixa para amarração nas costas e alça com regulador em metal'
const category = 'Aventais'
const ItemPrice = 89.9
const ItemOptions = ['Preto', 'Branco', 'Vermelho', 'Azul']

const ApronsDataList = [
  {
    name: `${category} Carpas e Flores`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: ApronsMandalaRed,
    imgSrc: [ApronsMandalaRedBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/aprons/peixes-koi-carpas-flores',
  },
  {
    name: `${category} Rosa Branca`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: ApronsSunflower,
    imgSrc: [ApronsSunflowerBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/aprons/rosa-grande-rosa-cristal',
  },
  {
    name: `${category} Leão Colorido`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: ApronsTurtleOrange,
    imgSrc: [ApronsTurtleOrangeBig],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/aprons/leao-ruge',
  },
  {
    name: `${category} Dragão Vermelho`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: ApronsRedWings,
    imgSrc: [ApronsRedWingsBig],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/aprons/dragao-vermelho',
  },
]

export default ApronsDataList

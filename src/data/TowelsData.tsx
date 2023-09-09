import Towels from '../assets/products_icon/towel_lion.png'
import TowelsTurtle from '../assets/products_icon/towel_turtle.png'
import TowelsMoon from '../assets/products_icon/towel_moon_flower.png'
import TowelsVitruvian from '../assets/products_icon/towel_vitruviano.png'

import TowelsBig from '../assets/products_img/towel_lion.png'
import TowelsTurtleBig from '../assets/products_img/towel_turtle.png'
import TowelsMoonBig from '../assets/products_img/towel_moon_flower.png'
import TowelsVitruvianBig from '../assets/products_img/towel_vitruviano.png'

const ItemDescription =
  'Toalhas de banho, de praia e de rosto com, tecido felpudo de poliéster'
const category = 'Toalha'
const ItemPrice = 84.9
const ItemOptions = ['Banho/Praia', 'Rosto']

const TowelsDataList = [
  {
    name: `${category} Leão Iluminado`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: Towels,
    imgSrc: [TowelsBig],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/towels/leao-iluminado',
  },
  {
    name: `${category} Tartaruga`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: TowelsTurtle,
    imgSrc: [TowelsTurtleBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/towels/tartaruga-marinha-nadapontilhismo-azul-aquarela',
  },
  {
    name: `${category} Lua`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: TowelsMoon,
    imgSrc: [TowelsMoonBig],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/towels/lua-floral-verde',
  },
  {
    name: `${category} Vitruviana`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: TowelsVitruvian,
    imgSrc: [TowelsVitruvianBig],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/towels/vitruviano',
  },
]

export default TowelsDataList

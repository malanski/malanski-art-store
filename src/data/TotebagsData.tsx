import BagAbelha from '../assets/products_icon/bag_abelha.png'
import BagEagle from '../assets/products_icon/bag_eagle.png'
import BagElephant from '../assets/products_icon/bag_elephant.png'
import BagVitruviano from '../assets/products_icon/bag_vitruviano.png'

import BagAbelhaBig from '../assets/products_img/bag_abelha.png'
import BagEagleBig from '../assets/products_img/bag_eagle.png'
import BagElephantBig from '../assets/products_img/bag_elephant.png'
import BagVitruvianoBig from '../assets/products_img/bag_vitruviano.png'

const ItemDescription =
  'Tamanho: 43 x 45 cm, a impressão é digital frente e verso em tecido sarjado 150gsm 100% poliéster'
const category = 'Bolsa'
const ItemPrice = 89.9
const ItemOptions = ['Alça 30cm', 'Sem zipper']

const TotebagsList = [
  {
    name: `${category} Abelha`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: BagAbelha,
    imgSrc: [BagAbelhaBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/totebags/abelha-rainha-preto-e-branco',
  },
  {
    name: `${category} Águia`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: BagEagle,
    imgSrc: [BagEagleBig],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/totebags/aguia-bate-asas',
  },
  {
    name: `${category} Elefante`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: BagElephant,
    imgSrc: [BagElephantBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/totebags/elefante-espiral-invertido',
  },
  {
    name: `${category} Vitruviano`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: BagVitruviano,
    imgSrc: [BagVitruvianoBig],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/totebags/vitruviano',
  },
]

export default TotebagsList

import MugsMandalaRed from '../assets/products_icon/mugs_rose_white.png'
import MugsSunflower from '../assets/products_icon/mugs_firefly.png'
import MugsTurtleOrange from '../assets/products_icon/mugs_bee_black.png'
import MugsRedWings from '../assets/products_icon/mugs_eagle_wings.png'

import MugsMandalaRedBig from '../assets/products_img/mugs_rose_white.png'
import MugsMandalaRedBack from '../assets/products_img/mugs_rose_white_back.png'
import MugsSunflowerBig from '../assets/products_img/mugs_firefly.png'
import MugsSunflowerBack from '../assets/products_img/mugs_firefly_back.png'
import MugsTurtleOrangeBig from '../assets/products_img/mugs_bee_black.png'
import MugsTurtleOrangeBack from '../assets/products_img/mugs_bee_black_back.png'
import MugsRedWingsBig from '../assets/products_img/mugs_eagle_wings.png'
import MugsRedWingsBack from '../assets/products_img/mugs_eagle_wings_back.png'

const ItemDescription =
  'Alça anti-térmica. Pode ir ao micro-ondas, freezer e lava-louças'
const category = 'Caneca'
const ItemPrice = 64.9
const ItemOptions = ['300ml', 'Cerâmica premium']

const MugsDataList = [
  {
    name: `${category} Rosa`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: MugsMandalaRed,
    imgSrc: [MugsMandalaRedBig, MugsMandalaRedBack],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/mugs/rosa-grande-rosa-cristal',
  },
  {
    name: `${category} Libélula`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: MugsSunflower,
    imgSrc: [MugsSunflowerBig, MugsSunflowerBack],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/mugs/libelulas-branco',
  },
  {
    name: `${category} Abelha`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: MugsTurtleOrange,
    imgSrc: [MugsTurtleOrangeBig, MugsTurtleOrangeBack],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/mugs/abelha-rainha-preto-e-branco',
  },
  {
    name: `${category} Águia`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: MugsRedWings,
    imgSrc: [MugsRedWingsBig, MugsRedWingsBack],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/mugs/aguia-bate-asas',
  },
]

export default MugsDataList

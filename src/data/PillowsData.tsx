import PillowGeisha from '../assets/products_icon/pillow_geisha.png'
import PillowKoi from '../assets/products_icon/pillow_koi.png'
import PillowRose from '../assets/products_icon/pillow_rose.png'
import PillowElephant from '../assets/products_icon/pillow_elephant.png'
import PillowTartaruga from '../assets/products_icon/pillow_tartaruga.png'
import PillowGirassois from '../assets/products_icon/pillow_girassois.png'
import PillowLibelula from '../assets/products_icon/pillow_libelula.png'
import PillowBesouro from '../assets/products_icon/pillow_besouro.png'

import PillowGeishaBig from '../assets/products_img/pillow_geisha.png'
import PillowKoiBig from '../assets/products_img/pillow_koi.png'
import PillowRoseBig from '../assets/products_img/pillow_rose.png'
import PillowElephantBig from '../assets/products_img/pillow_elephant.png'
import PillowTartarugaBig from '../assets/products_img/pillow_tartaruga.png'
import PillowGirassoisBig from '../assets/products_img/pillow_girassois.png'
import PillowLibelulaBig from '../assets/products_img/pillow_libelula.png'
import PillowBesouroBig from '../assets/products_img/pillow_besouro.png'

const ItemDescription =
  'Fofinhas, antialérgicas, zíper invisível, macias e 100% poliéster'
const category = 'Almofadas'
const ItemPrice = 79.9
const ItemOptions = ['40x40cm', '50x50cm']

const PillowsDataList = [
  {
    name: `${category} Geisha`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: PillowGeisha,
    imgSrc: [PillowGeishaBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/pillows/geisha-na-nuvem-voadora-nanquim-e-lapis-aquarela',
  },
  {
    name: `${category}  Carpas`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: PillowKoi,
    imgSrc: [PillowKoiBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/pillows/peixes-carpas-flores-koi-colorido',
  },
  {
    name: `${category}  Rosa`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: PillowRose,
    imgSrc: [PillowRoseBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/pillows/rosa-grande-rosa-cristal',
  },
  {
    name: `${category}  Elefante`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: PillowElephant,
    imgSrc: [PillowElephantBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/pillows/elefante-espiral-invertido',
  },
  {
    name: `${category}  Tartaruga`,
    description: ItemDescription,
    options: ['45x30cm', 'Capa', 'Enchimento'],
    iconSrc: PillowTartaruga,
    imgSrc: [PillowTartarugaBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/rectangular-pillows/tartaruga-marinha-pontilhismo-terceiro-olho',
  },
  {
    name: `${category}  Girassóis`,
    description: ItemDescription,
    options: ['45x30cm', 'Capa', 'Enchimento'],
    iconSrc: PillowGirassois,
    imgSrc: [PillowGirassoisBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/rectangular-pillows/girassois-e-margaridas-cheio-verde',
  },
  {
    name: `${category}  Libélula`,
    description: ItemDescription,
    options: ['45x30cm', 'Capa', 'Enchimento'],
    iconSrc: PillowLibelula,
    imgSrc: [PillowLibelulaBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/rectangular-pillows/libelula-na-floresta',
  },
  {
    name: `${category}  Besouro`,
    description: ItemDescription,
    options: ['45x30cm', 'Capa', 'Enchimento'],
    iconSrc: PillowBesouro,
    imgSrc: [PillowBesouroBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/rectangular-pillows/grande-besouro-voador-magenta-viva',
  },
]

export default PillowsDataList

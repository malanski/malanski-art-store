import teeSwRedDragon from '../assets/products_icon/tee_sw_red_dragon.png'
import teeSwOctoColor from '../assets/products_icon/tee_sw_octo_color.png'
import teeSwOctoColorInv from '../assets/products_icon/tee_sw_octo_inv.png'
import teeSwButterflyPink from '../assets/products_icon/tee_sw_butterfly_pink.png'
import teeSwSnake from '../assets/products_icon/tee_sw_snake.png'
import teeSwGeisha from '../assets/products_icon/tee_sw_geisha.png'
import teeSwKoi from '../assets/products_icon/tee_sw_koi_fish_flowers.png'
import teeSwTattoo from '../assets/products_icon/tee_sw_tattoo_grey.png'

// BiG Images
import teeSwRedDragonBig from '../assets/products_img/tee_sw_red_dragon.png'
import teeSwRedDragonBlack from '../assets/products_img/tee_sw_red_dragon_black.png'

import teeSwOctoColorBig from '../assets/products_img/tee_sw_octo_color.png'
import teeSwOctoColorBlack from '../assets/products_img/tee_sw_octo_color_black.png'

import teeSwOctoColorInvBig from '../assets/products_img/tee_sw_octo_inv.png'
import teeSwOctoColorInvBlack from '../assets/products_img/tee_sw_octo_inv_black.png'

import teeSwButterflyPinkBig from '../assets/products_img/tee_sw_butterfly_pink.png'
import teeSwButterflyPinkGrey from '../assets/products_img/tee_sw_butterfly_pink_grey.png'
import teeSwButterflyPinkBlack from '../assets/products_img/tee_sw_butterfly_pink_black.png'

import teeSwSnakeBig from '../assets/products_img/tee_sw_snake.png'
import teeSwSnakeGrey from '../assets/products_img/tee_sw_snake_grey.png'

import teeSwGeishaBig from '../assets/products_img/tee_sw_geisha.png'
import teeSwGeishaBlack from '../assets/products_img/tee_sw_geisha_black.png'

import teeSwKoiBig from '../assets/products_img/tee_sw_koi_fish_flowers.png'
import teeSwKoiBlack from '../assets/products_img/tee_sw_koi_fish_flowers_black.png'

import teeSwTattooBig from '../assets/products_img/tee_sw_tattoo.png'
import teeSwTattooGrey from '../assets/products_img/tee_sw_tattoo_grey.png'
import teeSwTattooBlack from '../assets/products_img/tee_sw_tattoo_black.png'

export const allSweatArray = [
  teeSwRedDragonBig,
  teeSwRedDragonBlack,
  teeSwOctoColorBig,
  teeSwOctoColorBlack,
  teeSwOctoColorInvBig,
  teeSwOctoColorInvBlack,
  teeSwButterflyPinkBig,
  teeSwButterflyPinkBlack,
  teeSwSnakeBig,
  teeSwSnakeGrey,
  teeSwGeishaBig,
  teeSwGeishaBlack,
  teeSwKoiBig,
  teeSwKoiBlack,
  teeSwTattooBig,
  teeSwTattooBlack,
]

const ItemDescription =
  'Disponível em vários tamanhos, 85% algodão, 15% poliéster'
const category = 'Moletons'
const ItemPrice = 184.9
const ItemOptions = ['Preto', 'Branco', 'Cinza']

const SweatShirtsDataList = [
  {
    name: `${category} Dragão Vermelho`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeSwRedDragon,
    imgSrc: [teeSwRedDragonBig, teeSwRedDragonBlack],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/sweatshirts/dragao-vermelho',
  },
  {
    name: `${category} Octógama Colorido`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeSwOctoColor,
    imgSrc: [teeSwOctoColorBig, teeSwOctoColorBlack],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/sweatshirts/crisantemo-octograma-estrela-colorido',
  },
  {
    name: `${category} Octógama Invertido`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeSwOctoColorInv,
    imgSrc: [teeSwOctoColorInvBig, teeSwOctoColorInvBlack],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/sweatshirts/crisantemo-octograma-estrela-invertido',
  },
  {
    name: `${category} Borboleta Rosa`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeSwButterflyPink,
    imgSrc: [
      teeSwButterflyPinkBig,
      teeSwButterflyPinkBlack,
      teeSwButterflyPinkGrey,
    ],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/sweatshirts/borboleta-e-rosas-de-afrodite-rosa-lavado',
  },
  {
    name: `${category} Serpente`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeSwSnake,
    imgSrc: [teeSwSnakeBig, teeSwSnakeGrey],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/sweatshirts/cobra-serpente',
  },
  {
    name: `${category} Geisha`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeSwGeisha,
    imgSrc: [teeSwGeishaBig, teeSwGeishaBlack],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/sweatshirts/geisha-na-nuvem-voadora-nanquim-e-lapis-aquarela',
  },
  {
    name: `${category} Carpas`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeSwKoi,
    imgSrc: [teeSwKoiBig, teeSwKoiBlack],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/sweatshirts/geisha-na-nuvem-voadora-nanquim-e-lapis-aquarela',
  },
  {
    name: `${category} Tattoo`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeSwTattoo,
    imgSrc: [teeSwTattooBlack, teeSwTattooBig, teeSwTattooGrey],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/sweatshirts/geisha-na-nuvem-voadora-nanquim-e-lapis-aquarela',
  },
]

export default SweatShirtsDataList

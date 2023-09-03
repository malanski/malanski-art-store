import teeSwRedDragon from '../assets/products_icon/tee_sw_red_dragon.png'
import teeSwOctoColor from '../assets/products_icon/tee_sw_octo_color.png'
import teeSwButterflyPink from '../assets/products_icon/tee_sw_butterfly_pink.png'
import teeSwSnake from '../assets/products_icon/tee_sw_snake.png'

import teeSwRedDragonBig from '../assets/products_img/tee_sw_octo_color.png'
import teeSwOctoColorBig from '../assets/products_img/tee_sw_octo_color.png'
import teeSwButterflyPinkBig from '../assets/products_img/tee_sw_butterfly_pink.png'
import teeSwSnakeBig from '../assets/products_img/tee_sw_snake.png'

interface ISweatShirtsData {
  name: string;
  description: string;
  options: string[];
  iconSrc: string;
  imgSrc: string;
  price: number;
}
const SweatShirtsDataList: ISweatShirtsData[] = [
  {
    name:'Moletom Dragão Vermelho',
    description:'Disponível em vários tamanhos, 85% algodão, 15% poliéster',
    options:['Preto', 'Branco', 'Cinza'],
    iconSrc: teeSwRedDragon,
    imgSrc: teeSwRedDragonBig,
    price: 184.90 
  },
  {
    name:'Moletom Octógama Colorido',
    description:'Disponível em vários tamanhos, 85% algodão, 15% poliéster',
    options:['Preto', 'Branco', 'Cinza'],
    iconSrc: teeSwOctoColor,
    imgSrc: teeSwOctoColorBig,
    price: 184.90 
  },
  {
    name:'Moletom Borboleta Rosa',
    description:'Disponível em vários tamanhos, 85% algodão, 15% poliéster',
    options:['Preto', 'Branco', 'Cinza'],
    iconSrc: teeSwButterflyPink,
    imgSrc: teeSwButterflyPinkBig,
    price: 184.90 
  },
  {
    name:'Moletom Serpente',
    description:'Disponível em vários tamanhos, 85% algodão, 15% poliéster',
    options:['Preto', 'Branco', 'Cinza'],
    iconSrc: teeSwSnake,
    imgSrc: teeSwSnakeBig,
    price: 184.90 
  },
]

export default SweatShirtsDataList;
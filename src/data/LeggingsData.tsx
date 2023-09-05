import LegMandala from '../assets/products_icon/leggings_mandala.png'
import LegTattoSnake from '../assets/products_icon/leggings_tattoo_snake.png'
import LegLeaves from '../assets/products_icon/leggings_leaves.png'
import LegSnake from '../assets/products_icon/leggings_snake.png'

import LegMandalaBig from '../assets/products_img/leggings_mandala.png'
import LegTattoSnakeBig from '../assets/products_img/leggings_tattoo_snake.png'
import LegLeavesBig from '../assets/products_img/leggings_leaves.png'
import LegSnakeBig from '../assets/products_img/leggings_snake.png'


interface IProductsData {
  name: string
  description: string
  options: string[]
  iconSrc: string
  imgSrc: string
  buyHref: string
  price: number
}
const LeggingsDataList: IProductsData[] = [
  {
    name:'Leggings Mandala',
    description:'Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 ',
    options:['Tamanho Único', '36 ao 44'],
    iconSrc: LegMandala,
    imgSrc: LegMandalaBig,
    price: 149.90,
    buyHref:'https://www.colab55.com/@malanskiart/leggings/fractal-mandala-branco' 
  },
  {
    name:'Leggings Tattooo',
    description:'Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 ',
    options:['Tamanho Único', '36 ao 44'],
    iconSrc: LegTattoSnake,
    imgSrc: LegTattoSnakeBig,
    price: 149.90,
    buyHref:'https://www.colab55.com/@malanskiart/leggings/cobra-serpente-flores-e-folhas'  
  },
  {
    name:'Leggings Folhas',
    description:'Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 ',
    options:['Tamanho Único', '36 ao 44'],
    iconSrc: LegLeaves,
    imgSrc: LegLeavesBig,
    price: 149.90,
    buyHref:'https://www.colab55.com/@malanskiart/leggings/folhagem-floral-verde-marmore'  
  },
  {
    name:'Leggings Serpente',
    description:'Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 ',
    options:['Tamanho Único', '36 ao 44'],
    iconSrc: LegSnake,
    imgSrc: LegSnakeBig,
    price: 149.90,
    buyHref:'https://www.colab55.com/@malanskiart/leggings/cobra-serpente'  
  },
]

export default LeggingsDataList;